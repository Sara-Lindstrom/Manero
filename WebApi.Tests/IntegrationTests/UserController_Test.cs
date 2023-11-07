using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using System.Net;
using WebApi.Context;
using WebApi.Models;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Xunit;

namespace WebApi.Tests.IntegrationTests
{
    public class UserController_Test
    {
        private readonly UserDbContext _context;
        private readonly UserController _controller;

        public UserController_Test()
        {
            var userManager = new Mock<UserManager<UserModel>>(
                new Mock<IUserStore<UserModel>>().Object,
                new Mock<IOptions<IdentityOptions>>().Object,
                new Mock<IPasswordHasher<UserModel>>().Object,
                new IUserValidator<UserModel>[0],
                new IPasswordValidator<UserModel>[0],
                new Mock<ILookupNormalizer>().Object,
                new Mock<IdentityErrorDescriber>().Object,
                new Mock<IServiceProvider>().Object,
                new Mock<ILogger<UserManager<UserModel>>>().Object);

            var contextOptions = new DbContextOptionsBuilder<UserDbContext>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;
            _context = new UserDbContext(contextOptions);

            var signInManager = new Mock<SignInManager<UserModel>>(
                userManager.Object,
                new HttpContextAccessor(),
                new Mock<IUserClaimsPrincipalFactory<UserModel>>().Object,
                new Mock<IOptions<IdentityOptions>>().Object,
                new Mock<ILogger<SignInManager<UserModel>>>().Object,
                new Mock<IAuthenticationSchemeProvider>().Object,
                new Mock<IUserConfirmation<UserModel>>().Object);

            var configuration = new Mock<IConfiguration>();

            _controller = new UserController(userManager.Object, _context, signInManager.Object, configuration.Object);
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
            var conflictResult = Assert.IsType<BadRequestObjectResult>(result);
            Assert.Equal((int)HttpStatusCode.BadRequest, conflictResult.StatusCode);
        }
    }
}
