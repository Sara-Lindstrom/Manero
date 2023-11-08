using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class ImageRepo : Repo<ImageEntity, ProductDbContext>
    {
        public ImageRepo(ProductDbContext dbContext) : base(dbContext)
        {
        }
    }
}
