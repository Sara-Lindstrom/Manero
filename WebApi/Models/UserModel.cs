using Microsoft.AspNetCore.Identity;

namespace WebApi.Models
{
    public class UserModel : IdentityUser
    {
        public bool RememberMe { get; set; }

        public ICollection<Address> Addresses { get; set; }
    }
}
