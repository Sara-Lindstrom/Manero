using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Context;
using WebApi.Models;
using WebApi.DTO;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<UserModel> _userManager; // Need this to be able to create a new user using Identity
    private readonly UserDbContext _context;
    private readonly SignInManager<UserModel> _signInManager; // Need this to be able to sign in using Sign in Manager
    private readonly IConfiguration _configuration; // Need this to store the token
    public UserController(UserManager<UserModel> userManager, UserDbContext context, SignInManager<UserModel> signInManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
        _configuration = configuration;
    }

    private string GenerateJwtToken(UserModel user)
    {
        var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
        // Retrieve the secret key from appsettings.json
        var key = Encoding.ASCII.GetBytes(_configuration["JwtSecretKey"]);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
                // Add additional claims as needed
            }),
            Expires = DateTime.UtcNow.AddDays(7), // Set token expiration as needed
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    // Method for create a new user using email
    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User model)
    {
        if (!ModelState.IsValid)
        {
            return UnprocessableEntity(ModelState);
        }

        var existingUser = await _userManager.FindByEmailAsync(model.Email);
        if (existingUser != null)
        {
            return Conflict(new { Message = "User already exists." });
        }

        var user = new UserModel { UserName = model.Email, Email = model.Email };
        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            // Add the name as a claim
            await _userManager.AddClaimAsync(user, new System.Security.Claims.Claim("name", model.Name));

            return Ok(new { Message = "Registration was successful." });
        }

        return BadRequest(new { Errors = result.Errors.Select(x => x.Description) });
    }

    // Method for signing in
    [HttpPost("SignIn")]
    public async Task<IActionResult> SignIn([FromBody] UserCredentials credentials)
    {
        // Validate email and password
        if (string.IsNullOrEmpty(credentials.Email) || string.IsNullOrEmpty(credentials.Password))
        {
            return BadRequest("Email or password cannot be empty.");
        }

        // Find user by email
        var user = await _userManager.FindByEmailAsync(credentials.Email);
        if (user != null)
        {
            // Sign in with password
            var result = await _signInManager.PasswordSignInAsync(user, credentials.Password, credentials.RememberMe, false);
            if (result.Succeeded)
            {
                // Save RememberMe state to database
                user.RememberMe = credentials.RememberMe;
                var updateResult = await _userManager.UpdateAsync(user);

                if (!updateResult.Succeeded)
                {
                    // Handle update failure
                    return BadRequest(updateResult.Errors);
                }

                // Generate JWT token for the user
                var token = GenerateJwtToken(user);

                // Return the token in the response
                return Ok(new { token = token });
            }
        }
        return Unauthorized("Invalid login attempt.");
    }

    // Method to get user profile for editing
    [Authorize]
    [HttpGet("EditProfile")]
    public async Task<IActionResult> EditProfile()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            return NotFound("User not found.");
        }

        var userClaims = await _userManager.GetClaimsAsync(user);
        var nameClaim = userClaims.FirstOrDefault(c => c.Type == "name")?.Value;

        var profileData = new UserUpdateModel
        {
            Email = user.Email,
            Name = nameClaim,
            PhoneNumber = user.PhoneNumber,
            // Populate other fields as necessary
        };

        return Ok(profileData);
    }

    // Edit and view profile
    [Authorize]
    [HttpPut("UpdateProfile")] 
    public async Task<IActionResult> UpdateProfile([FromBody] UserUpdateModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
        {
            return NotFound("User not found.");
        }

        bool updateRequired = false;

        // Update user email if has changed and is valid
        if (!string.Equals(model.Email, user.Email, StringComparison.OrdinalIgnoreCase))
        {
            var setEmailResult = await _userManager.SetEmailAsync(user, model.Email);
            if (!setEmailResult.Succeeded)
            {
                return BadRequest(setEmailResult.Errors);
            }
            updateRequired = true;
        }

        // Update the name claim
        var nameClaim = (await _userManager.GetClaimsAsync(user)).FirstOrDefault(c => c.Type == "name");
        if (nameClaim != null && model.Name != nameClaim.Value)
        {
            var replaceClaimResult = await _userManager.ReplaceClaimAsync(user, nameClaim, new Claim("name", model.Name));
            if (!replaceClaimResult.Succeeded)
            {
                return BadRequest(replaceClaimResult.Errors);
            }
            updateRequired = true;
        }
        else if (nameClaim == null && !string.IsNullOrEmpty(model.Name))
        {
            var addClaimResult = await _userManager.AddClaimAsync(user, new Claim("name", model.Name));
            if (!addClaimResult.Succeeded)
            {
                return BadRequest(addClaimResult.Errors);
            }
            updateRequired = true;
        }

        // Update the phone number if it has changed and is not null
        if (model.PhoneNumber != user.PhoneNumber && model.PhoneNumber != null)
        {
            var setPhoneResult = await _userManager.SetPhoneNumberAsync(user, model.PhoneNumber);
            if (!setPhoneResult.Succeeded)
            {
                return BadRequest(setPhoneResult.Errors);
            }
            updateRequired = true;
        }

        if (updateRequired)
        {
            await _signInManager.RefreshSignInAsync(user);
        }

        return Ok(new { Message = "Profile updated successfully." });
    }

    // Method for password reset
    [HttpPost("ResetPassword")]
    public async Task<IActionResult> ResetPassword([FromBody] UserResetPassword model)
    {
        if (!ModelState.IsValid)
        {
            return UnprocessableEntity(ModelState);
        }

        if (model.NewPassword != model.ConfirmPassword)
        {
            return BadRequest(new { Message = "Passwords do not match." });
        }

        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return NotFound(new { Message = "User not found." });
        }

        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
        // Pass the new password to ASPNetUsers through usermanager
        var result = await _userManager.ResetPasswordAsync(user, resetToken, model.NewPassword);

        if (result.Succeeded)
        {
            return Ok(new { Message = "Password reset successfully." });
        }

        return BadRequest(new { Errors = result.Errors.Select(x => x.Description) });
    }

    // Method for signing out
    [HttpPost("SignOut")]
    public async Task<IActionResult> SignOut()
    {
        await _signInManager.SignOutAsync();
        return Ok(new { Message = "Signed out successfully!" });
    }

    // Method for fetching all users and display them
    [HttpGet]
    public async Task<ActionResult> GetUsers()
    {
        var users = await _context.Users.ToListAsync();
        return Ok(users);
    }

    // Method to check if email already exists
    [HttpPost("CheckEmail")]
    public async Task<IActionResult> CheckEmail([FromBody] string email)
    {
        // Validate email
        if (string.IsNullOrEmpty(email))
        {
            return BadRequest("Email cannot be empty.");
        }

        // Find user by email
        var user = await _userManager.FindByEmailAsync(email);
        if (user != null)
        {
            return Ok(new { Message = "User exists." });
        }
        else
        {
            return NotFound(new { Message = "User not found." });
        }
    }

}