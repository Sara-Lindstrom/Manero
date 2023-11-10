using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using WebApi.Context;
using WebApi.Models;

namespace WebApi.Tests.UnitTests
{
    public class UserSignOut_Test
    {
        private readonly Mock<UserManager<UserModel>> _mockUserManager;
        private readonly Mock<UserDbContext> _mockUserDbContext;
        private readonly Mock<SignInManager<UserModel>> _mockSignInManager;
        private readonly Mock<IConfiguration> _mockConfiguration;
        private readonly UserController _userController;

        public UserSignOut_Test()
        {
            _mockConfiguration = new Mock<IConfiguration>();

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

            _userController = new UserController(
                _mockUserManager.Object,
                _mockUserDbContext.Object,
                _mockSignInManager.Object,
                _mockConfiguration.Object);
        }

        // Checking result for signing out
        [Fact]
        public async Task SignOut_ShouldReturnOkResult()
        {
            // Arrange
            _mockSignInManager.Setup(x => x.SignOutAsync()).Returns(Task.CompletedTask);

            // Act
            var result = await _userController.SignOut() as ObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);

            var okResult = result as OkObjectResult;
            var message = okResult.Value as string;

            // Check that there are no errors in the response
            if (string.IsNullOrEmpty(message))
            {
                Assert.True(true);
            }
            else
            {
                Assert.True(false, "An error message was found in the response: " + message);
            }
        }
    }
}
