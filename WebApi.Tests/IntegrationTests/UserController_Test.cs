using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moq;
using System.Net;
using System.Threading.Tasks;
using WebApi.Models;
using WebApi.Context;

namespace WebApi.Tests.IntegrationTests;
public class UserController_Test
{
    private readonly Mock<UserManager<UserModel>> _userManagerMock;
    private readonly Mock<SignInManager<UserModel>> _signInManagerMock;
    private readonly Mock<IConfiguration> _configurationMock;
    private readonly UserController _controller;
    private readonly UserDbContext _context;

    public UserController_Test()
    {
        var userStoreMock = new Mock<IUserStore<UserModel>>();
        _userManagerMock = new Mock<UserManager<UserModel>>(
            userStoreMock.Object, null, null, null, null, null, null, null, null);

        var contextAccessorMock = new Mock<Microsoft.AspNetCore.Http.IHttpContextAccessor>();
        var userPrincipalFactoryMock = new Mock<IUserClaimsPrincipalFactory<UserModel>>();
        _signInManagerMock = new Mock<SignInManager<UserModel>>(
            _userManagerMock.Object, contextAccessorMock.Object, userPrincipalFactoryMock.Object, null, null, null, null);

        _configurationMock = new Mock<IConfiguration>();

        // Setup in-memory database
        var options = new DbContextOptionsBuilder<UserDbContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;
        _context = new UserDbContext(options);

        // Instantiate the UserController with the mocked dependencies
        _controller = new UserController(
            _userManagerMock.Object,
            _context,
            _signInManagerMock.Object,
            _configurationMock.Object
        );
    }

    [Fact]
    public async Task CreateUser_Should_Return_Conflict_When_User_Exists()
    {
        // Arrange: Prepare a user model to create
        var existingUser = new UserModel { UserName = "test@example.com", Email = "test@example.com" };
        _userManagerMock.Setup(x => x.FindByEmailAsync("test@example.com")).ReturnsAsync(existingUser);

        var userModel = new User { Email = "test@example.com", Password = "Password123", Name = "Test" };

        // Act: Send a POST request to the CreateUser endpoint
        var result = await _controller.CreateUser(userModel);

        // Assert: Check the HTTP response status code
        var conflictResult = Assert.IsType<ConflictObjectResult>(result);
        Assert.Equal((int)HttpStatusCode.Conflict, conflictResult.StatusCode);
    }
}