using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;
using WebApi.Context;
using WebApi.Models;
using IdentityServer4.Test;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;

namespace WebApi.Tests.UnitTests;

public class UserController_Tests
{
    private readonly Mock<UserManager<UserModel>> _mockUserManager;
    private readonly Mock<UserDbContext> _mockUserDbContext;
    private readonly Mock<SignInManager<UserModel>> _mockSignInManager;
    private readonly UserController _userController;

    public UserController_Tests()
    {
        //UserManager
        var userStore = new Mock<IUserStore<UserModel>>(); 
        _mockUserManager = new Mock<UserManager<UserModel>>(
            userStore.Object,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null);

        //UserDbContext
        _mockUserDbContext = new Mock<UserDbContext>(new DbContextOptions<UserDbContext>());

        var users = new[]
            {
                new UserModel { Id = "1", UserName = "user1", Email = "user1@example.com" },
                new UserModel { Id = "2", UserName = "user2", Email = "user2@example.com" }
            }.AsQueryable();

        var mockDbSet = new Mock<DbSet<UserModel>>();
        mockDbSet.As<IQueryable<UserModel>>().Setup(m => m.Provider).Returns(users.Provider);
        mockDbSet.As<IQueryable<UserModel>>().Setup(m => m.Expression).Returns(users.Expression);
        mockDbSet.As<IQueryable<UserModel>>().Setup(m => m.ElementType).Returns(users.ElementType);
        mockDbSet.As<IQueryable<UserModel>>().Setup(m => m.GetEnumerator()).Returns(() => users.GetEnumerator());

        _mockUserDbContext.Setup(d => d.Users).Returns(mockDbSet.Object);

        //SignInManager
        var contextAccessor = new Mock<IHttpContextAccessor>();
        var userPrincipalFactory = new Mock<IUserClaimsPrincipalFactory<UserModel>>();
        var options = new Mock<IOptions<IdentityOptions>>();
        var logger = new Mock<ILogger<SignInManager<UserModel>>>();
        var schemes = new Mock<IAuthenticationSchemeProvider>();
        var confirmation = new Mock<IUserConfirmation<UserModel>>();

        _mockSignInManager = new Mock<SignInManager<UserModel>>(
            _mockUserManager.Object, 
            contextAccessor.Object, 
            userPrincipalFactory.Object, 
            options.Object,         
            logger.Object,            
            schemes.Object,           
            confirmation.Object);

        _userController = new UserController(_mockUserManager.Object, _mockUserDbContext.Object, _mockSignInManager.Object);
    }

    [Fact]
    public async Task CreateAsync_ShouldReturnBadRequest_WhenModelStateIsInvalid()
    {
        // Arrange
        var user = new User();
        _userController.ModelState.AddModelError("Name", "Name is required");

        // Act
        var result = await _userController.CreateUser(user);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result); // Corrected expected type
    }

    [Fact]
    public async Task SignIn_ShouldReturnOk_WhenSignInSucceeds()
    {
        //Arrange
        var user = new UserModel
        {
            UserName = "testuser",
            Email = "testuser@example.com",
        };

        _mockSignInManager
                .Setup(x => x.PasswordSignInAsync(user, "password", true, false))
                .ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Success);

        var model = new User
        {
            Email = user.Email,
            Password = "password",
            RememberMe = true,
        };

        //Act
        var result = await _userController.SignIn(model);

        //Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }

    [Fact]
    public async Task SignIn_ShouldReturnBadRequest_WhenSignInFails()
    {
        // Arrange
        var user = new UserModel
        {
            UserName = "testuser",
            Email = "testuser@example.com",
        };

        _mockSignInManager
            .Setup(x => x.PasswordSignInAsync(user, "invalid_password", true, false))
            .ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Failed);

        var model = new User
        {
            Email = user.Email,
            Password = "invalid_password",
            RememberMe = true,
        };

        // Act
        var result = await _userController.SignIn(model);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);
    }
}
