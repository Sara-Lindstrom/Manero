using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Context
{
    public class UserDbContext : IdentityDbContext<UserModel>
    {
        public UserDbContext(DbContextOptions<UserDbContext> options)
      : base(options)
        {
        }
    }
}
