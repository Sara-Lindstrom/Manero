
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System.Net;
using System.Text;
using WebApi;
using WebApi.Context;
using WebApi.Models;

namespace WebApi.Tests.IntegrationTests;

public class UserController_Tests 
{
    private readonly UserDbContext _context;
    private readonly UserController _controller;

    public UserController_Tests()
	{
        var DBoptions = new DbContextOptionsBuilder<UserDbContext>()
            .UseInMemoryDatabase(databaseName: "test")
            .Options;

        _context = new UserDbContext(DBoptions);

        var userManager = new UserManager<UserModel>(new UserStore<UserModel>(_context), null, null, null, null, null, null, null, null);
        var signInManager = new SignInManager<UserModel>(userManager, new HttpContextAccessor(), new Mock<IUserClaimsPrincipalFactory<UserModel>>().Object, null, null, null, null);

        _controller = new UserController(userManager, _context, signInManager);
    }

    [Fact]
    public async Task CreateUser_Should_Return_Conflict_When_User_Exists()
    {
        // Arrange: Prepare a user model to create
        var userModel = new User
        {
            Email = "test@example.com",
            Password = "Password123"
        };

        // Act: Send a POST request to the CreateUser endpoint

        var result = await _controller.CreateUser(userModel);

        // Assert: Check the HTTP response status code
        var conflictResult = Assert.IsType<ConflictResult>(result);
        Assert.Equal((int)HttpStatusCode.Conflict, conflictResult.StatusCode);
    }
}
