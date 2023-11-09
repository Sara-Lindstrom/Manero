using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class TagRepo : Repo<TagEntity, ProductDbContext>
    {
        public TagRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
