using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using WebApi.Context;
using WebApi.Models;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Xunit;

namespace WebApi.Tests.UnitTests
{
    public class UserSignUp_Test
    {
        private readonly Mock<UserManager<UserModel>> _mockUserManager;
        private readonly Mock<SignInManager<UserModel>> _mockSignInManager;
        private readonly Mock<IConfiguration> _mockConfiguration;
        private readonly UserController _userController;
        private readonly UserDbContext _context;

        public UserSignUp_Test()
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

            // SignInManager
            var contextAccessor = new Mock<Microsoft.AspNetCore.Http.IHttpContextAccessor>();
            var userPrincipalFactory = new Mock<IUserClaimsPrincipalFactory<UserModel>>();
            _mockSignInManager = new Mock<SignInManager<UserModel>>(
                _mockUserManager.Object,
                contextAccessor.Object,
                userPrincipalFactory.Object,
                null,
                null,
                null,
                null);

            // IConfiguration
            _mockConfiguration = new Mock<IConfiguration>();

            // Setup in-memory database
            var options = new DbContextOptionsBuilder<UserDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase") // Use a unique name for the database
                .Options;
            _context = new UserDbContext(options);

            // UserController
            _userController = new UserController(
                _mockUserManager.Object,
                _context,
                _mockSignInManager.Object,
                _mockConfiguration.Object);
        }

        // Validate how the API handles model states that is invalid, no user is created
        [Fact]
        public async Task CreateUser_ShouldReturnUnprocessableEntity_WhenModelStateIsInvalid()
        {
            // Arrange
            var user = new User();
            _userController.ModelState.AddModelError("Email", "Email is required");

            // Act
            var result = await _userController.CreateUser(user);

            // Assert
            Assert.IsType<UnprocessableEntityObjectResult>(result);
        }

        // Check response from API if the user is created successful
        [Fact]
        public async Task CreateUser_ShouldReturnOk_WhenUserIsCreatedSuccessfully()
        {
            // Arrange
            var user = new User { Email = "new@example.com", Password = "Password1!", Name = "John Doe" }; // Include Name
            _mockUserManager.Setup(x => x.CreateAsync(It.IsAny<UserModel>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Success);

            // For AddClaimAsync to return Success
            _mockUserManager.Setup(x => x.AddClaimAsync(It.IsAny<UserModel>(), It.IsAny<System.Security.Claims.Claim>()))
                           .ReturnsAsync(IdentityResult.Success);

            // Act
            var result = await _userController.CreateUser(user);

            // Assert
            Assert.IsType<OkObjectResult>(result);
        }

        // Checking result for create user that fails
        [Fact]
        public async Task CreateUser_ShouldReturnBadRequest_WhenCreationFails()
        {
            // Arrange
            var user = new User
            {
                Email = "failed@example.com",
                Password = "Password1!"
            };

            _mockUserManager
                .Setup(x => x.CreateAsync(It.IsAny<UserModel>(), It.IsAny<string>()))
                .ReturnsAsync(IdentityResult.Failed());

            // Act
            var result = await _userController.CreateUser(user);

            // Assert
            Assert.IsType<BadRequestObjectResult>(result);
        }

        // Check response from API if the user already exists
        [Fact]
        public async Task CreateUser_ShouldReturnConflict_WhenUserAlreadyExists()
        {
            // Arrange
            var user = new User 
            { 
               Email = "existing@example.com", 
               Password = "Password1!" 
            
            };
            _mockUserManager
                .Setup(x => x.FindByEmailAsync(It.IsAny<string>()))
                .ReturnsAsync(new UserModel());

            // Act
            var result = await _userController.CreateUser(user);

            // Assert
            Assert.IsType<ConflictObjectResult>(result);
        }
    }
}