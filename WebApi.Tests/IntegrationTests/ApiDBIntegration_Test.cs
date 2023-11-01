using System.Net.Http;
using Xunit;
using System.Threading.Tasks;
using System.Net;

namespace WebApi.Tests.IntegrationTests
{
    public class ApiDatabaseIntegration_Test
    {
        private readonly HttpClient _client;

        public ApiDatabaseIntegration_Test()
        {
            _client = new HttpClient(); // No base address set here
        }

        [Fact]
        public async Task GetUsers_CanConnectToDatabase_ReturnsOk()
        {
            // Act
            var response = await _client.GetAsync("https://localhost:7055/api/User"); // Full URL specified here

            // Assert
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }
    }
}