using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class CategoryTagRepo : Repo<CategoryTagEntity, ProductDbContext>
    {
        public CategoryTagRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
