using Microsoft.AspNetCore.Identity;
using WebApi.Models.Address;

namespace WebApi.Models
{
    public class UserModel : IdentityUser
    {
        public bool RememberMe { get; set; }

        public ICollection<Address.Address> Addresses { get; set; }
        public ICollection<Location> Locations { get; set; }
    }
}
