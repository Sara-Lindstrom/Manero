using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;
using WebApi.Context;
using WebApi.Models;
using WebApi.DTO;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Tests.UnitTests
{
    public class UserSignIn_Test
    {
        private readonly Mock<UserManager<UserModel>> _mockUserManager;
        private readonly Mock<UserDbContext> _mockUserDbContext;
        private readonly Mock<SignInManager<UserModel>> _mockSignInManager;
        private readonly UserController _userController;

        public UserSignIn_Test()
        {
            // UserManager
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

            // UserDbContext
            _mockUserDbContext = new Mock<UserDbContext>(new DbContextOptions<UserDbContext>());

            // SignInManager
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

        // Checking result for a sign in-attempt that is successful
        public async Task SignIn_ShouldReturnOk_WhenSignInSucceeds()
        {
            // Arrange
            var userCredentials = new UserCredentials
            {
                Email = "testuser@example.com",
                Password = "test123!"
            };

            _mockSignInManager
                .Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>()))
                .ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Success);

            // Act
            var result = await _userController.SignIn(userCredentials);

            // Assert
            Assert.IsType<OkResult>(result);
        }

        // Checking result for a sign in-attempt that fails
        [Fact]
        public async Task SignIn_ShouldReturnBadRequest_WhenSignInFails()
        {
            // Arrange
            var userCredentials = new UserCredentials
            {
                Email = "ninja@mail.se",
                Password = "Hejsan123!"
            };

            _mockSignInManager
                .Setup(x => x.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>()))
                .ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Failed);

            // Act
            var result = await _userController.SignIn(userCredentials);

            // Assert
            Assert.IsType<UnauthorizedResult>(result);
        }
    }
}