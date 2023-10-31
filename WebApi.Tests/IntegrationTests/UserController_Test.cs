using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using System.Net;
using WebApi.Context;
using WebApi.Models;
using Xunit;

namespace WebApi.Tests.IntegrationTests;

public class UserController_Test
{
    private readonly UserDbContext _context;
    private readonly UserController _controller;

    public UserController_Test()
    {
        var DBoptions = new DbContextOptionsBuilder<UserDbContext>()
            .UseInMemoryDatabase(databaseName: "localDbTest")
            .Options;

        _context = new UserDbContext(DBoptions);

        var userStore = new UserStore<UserModel>(_context);

        var userManager = new UserManager<UserModel>(
          userStore,
          new Mock<IOptions<IdentityOptions>>().Object,
          new PasswordHasher<UserModel>(),
          new IUserValidator<UserModel>[0],
          new IPasswordValidator<UserModel>[0],
          new Mock<ILookupNormalizer>().Object,
          new Mock<IdentityErrorDescriber>().Object,
          new Mock<IServiceProvider>().Object,
          new Mock<ILogger<UserManager<UserModel>>>().Object);

        var userConfirmation = new Mock<IUserConfirmation<UserModel>>();

        var signInManager = new SignInManager<UserModel>(
            userManager,
            new HttpContextAccessor(),
            new Mock<IUserClaimsPrincipalFactory<UserModel>>().Object,
            new Mock<IOptions<IdentityOptions>>().Object,
            new Mock<ILogger<SignInManager<UserModel>>>().Object,
            new Mock<IAuthenticationSchemeProvider>().Object,
            userConfirmation.Object);

        _controller = new UserController(userManager, _context, signInManager);
    }

    [Fact]
    public async Task CreateUser_Should_Return_Conflict_When_User_Exists()
    {
        // Arrange: Prepare a user model to create
        var existingUser = new UserModel
        {
            UserName = "test@example.com",
            Email = "test@example.com"
        };

        // Add the existing user to the context
        _context.Users.Add(existingUser);
        _context.SaveChanges();

        // Create a user model that conflicts with the existing user
        var userModel = new User
        {
            Email = "test@example.com",
            Password = "Password123",
            Name = "Test",
        };

        // Act: Send a POST request to the CreateUser endpoint
        var result = await _controller.CreateUser(userModel);

        // Assert: Check the HTTP response status code
        var conflictResult = Assert.IsType<ConflictObjectResult>(result);
        Assert.Equal((int)HttpStatusCode.Conflict, conflictResult.StatusCode);
    }
}