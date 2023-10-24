
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Net;
using System.Text;
using WebApi;

namespace WebApi.Tests.IntegrationTests;

[Collection("IntegrationTestCollection")]
public class UserController_Tests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    private readonly WebApplicationFactory<Program> _factory;

    public UserController_Tests(WebApplicationFactory<Program> factory)
	{
        _factory = factory;
        _client = factory.CreateClient();


        //_client = new HttpClient
        //{
        //    BaseAddress = new Uri("http://localhost:3000"), // Replace with the URL of your running application.
        //};
    }

    [Fact]
    public async Task CreateUser_Should_Return_Conflict_When_User_Exists()
    {
        // Arrange: Prepare a user model to create
        var userModel = new
        {
            Email = "test@example.com",
            Password = "Password123"
        };

        // Act: Send a POST request to the CreateUser endpoint

        var requestContent = new StringContent(
               System.Text.Json.JsonSerializer.Serialize(userModel),
               Encoding.UTF8,
               "application/json");

        var response = await _client.PostAsync("/api/User/CreateUser", requestContent);

        // Assert: Check the HTTP response status code
        Assert.Equal(HttpStatusCode.Conflict, response.StatusCode);
    }
}
