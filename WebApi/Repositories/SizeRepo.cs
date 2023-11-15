using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class SizeRepo : Repo<SizeEntity, ProductDbContext>
    {
        public SizeRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
