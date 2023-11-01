using Microsoft.EntityFrameworkCore;

namespace WebApi.Context
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
