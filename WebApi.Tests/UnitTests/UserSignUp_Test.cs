using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using WebApi.Context;
using WebApi.Models;

namespace WebApi.Tests.UnitTests
{
    public class UserSignUp_Test
    {
        private readonly Mock<UserManager<UserModel>> _mockUserManager;
        private readonly Mock<UserDbContext> _mockUserDbContext;
        private readonly UserController _userController;

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

            // UserDbContext
            _mockUserDbContext = new Mock<UserDbContext>(new DbContextOptions<UserDbContext>());

            //_userController = new UserController(_mockUserManager.Object, _mockUserDbContext.Object, null);
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