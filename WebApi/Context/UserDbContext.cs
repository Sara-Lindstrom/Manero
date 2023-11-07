using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using WebApi.Models.Address;

namespace WebApi.Context
{
    public class UserDbContext : IdentityDbContext<UserModel>
    {
        public DbSet<Address> Addresses { get; set; }

        public UserDbContext(DbContextOptions<UserDbContext> options)
      : base(options)
        {
        }
    }
}
