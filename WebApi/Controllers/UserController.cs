using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Context;
using WebApi.Models;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly UserManager<UserModel> _userManager; // Need this to be able to create a new user using Identity
    private readonly UserDbContext _context;
    private readonly SignInManager<UserModel> _signInManager; // Need this to be able to sign in

    // Initialize
    public UserController(UserManager<UserModel> userManager, UserDbContext context, SignInManager<UserModel> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _context = context;
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
            return BadRequest(ModelState);
        }

        var existingUser = await _userManager.FindByEmailAsync(model.Email);
        if (existingUser != null)
        {
            return Conflict(new { Message = "User already exists." });
        }

        var user = new UserModel
        {
            UserName = model.Email,
            Email = model.Email
        };

        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            return Ok(new { Message = "Yeay, the registration was successful!" });
        }

        return BadRequest(result.Errors);
    }

    // Method and endpoint for signing in
    [HttpPost("SignIn")]
    public async Task<IActionResult> SignIn([FromBody] User model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Find user by email address
        var user = await _userManager.FindByEmailAsync(model.Email);

        if (user == null)
        {
            return BadRequest(new { Message = "Invalid email or password" });
        }

        // Sign in
        var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.RememberMe, false);

        if (result.Succeeded)
        {
            return Ok(new { Message = "Yeay, the sign in was successful!" });
        }

        return BadRequest(new { Message = "Invalid email or password" });
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
            return BadRequest(ModelState);
        }

        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return BadRequest("Invalid user.");
        }

        var resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
        var result = await _userManager.ResetPasswordAsync(user, resetToken, model.NewPassword);

        if (result.Succeeded)
        {
            return Ok("Password reset successfully.");
        }

        return BadRequest(result.Errors);
    }
}