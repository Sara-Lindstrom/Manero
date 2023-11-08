using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class CategoryRepo : Repo<CategoryEntity, ProductDbContext>
    {
        public CategoryRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
