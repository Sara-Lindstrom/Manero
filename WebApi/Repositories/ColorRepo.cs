using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class ColorRepo : Repo<ColorEntity, ProductDbContext>
    {
        public ColorRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
