using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System.Security.Claims;
using WebApi.Context;
using WebApi.Controllers;
using WebApi.DTO;
using WebApi.Models;

namespace WebApi.Tests.UnitTests
{
    public class UserAddressInsert_Test
    {
        public static class MockUserManager
        {
            public static Mock<UserManager<UserModel>> Create()
            {
                var userStoreMock = new Mock<IUserStore<UserModel>>();
                return new Mock<UserManager<UserModel>>(userStoreMock.Object, null, null, null, null, null, null, null, null);
            }
        }

        [Fact]
        public async Task AddAddress_ValidModel_ReturnsOk()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<UserDbContext>()
                .UseInMemoryDatabase(databaseName: "InMemoryDatabase")
                .Options;

            using (var context = new UserDbContext(options))
            {
                var userManagerMock = MockUserManager.Create();
                var controller = new AddressController(userManagerMock.Object, context);
                var user = new ClaimsPrincipal(new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.NameIdentifier, "UserId123")
                }, "mock"));

                controller.ControllerContext = new ControllerContext
                {
                    HttpContext = new DefaultHttpContext { User = user }
                };

                var addressDTO = new UserAddressDTO
                {
                    Title = "Home",
                    StreetName = "123 Main St",
                    City = "City",
                    Country = "Country",
                    PostalCode = "12345"
                };

                // Act
                var result = await controller.AddAddress(addressDTO) as ObjectResult;

                // Assert
                Assert.NotNull(result);
                Assert.Equal(200, result.StatusCode);

                // Check if the result.Value is an object with a Message property
                var message = result.Value?.GetType().GetProperty("Message")?.GetValue(result.Value);

                Assert.NotNull(message);
                Assert.Equal("Address added successfully.", message);

                // Check the actual state in the database
                var addedAddress = await context.Addresses.FirstOrDefaultAsync(a => a.UserId == "UserId123");

                Assert.NotNull(addedAddress);
                Assert.Equal("Home", addedAddress.Title);
                Assert.Equal("123 Main St", addedAddress.StreetName);
                Assert.Equal("City", addedAddress.City);
                Assert.Equal("Country", addedAddress.Country);
                Assert.Equal("12345", addedAddress.PostalCode);
            }
        }
    }
}
