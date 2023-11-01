namespace WebApi.DTO
{
    // Used as a DTO to store sign in information
    public class UserCredentials
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
