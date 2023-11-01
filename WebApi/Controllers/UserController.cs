using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Context;
using WebApi.Models;
using WebApi.DTO;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<UserModel> _userManager; // Need this to be able to create a new user using Identity
    private readonly UserDbContext _context;
    private readonly SignInManager<UserModel> _signInManager; // Need this to be able to sign in using Sign in Manager

    // Initialize
    public UserController(UserManager<UserModel> userManager, UserDbContext context, SignInManager<UserModel> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
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
                }

                return Ok();
            }
        }
        return Unauthorized();
    }

    // Method for fetching all users and display them
    [HttpGet]
    public async Task<ActionResult> GetUsers()
    {
        var users = await _context.Users.ToListAsync();
        return Ok(users);
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

    // Method for signing out
    [HttpPost("SignOut")]
    public async Task<IActionResult> SignOut()
    {
        await _signInManager.SignOutAsync();
        return Ok(new { Message = "Signed out successfully!" });
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