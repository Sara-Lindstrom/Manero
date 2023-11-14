using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class ColorRepo : Repo<TagEntity, ProductDbContext>
    {
        public ColorRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
