using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class SizeRepo : Repo<TagEntity, ProductDbContext>
    {
        public SizeRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
