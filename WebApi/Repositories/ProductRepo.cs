using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories;

public class ProductRepo : Repo<ProductEntity, ProductDbContext>
{
    public ProductRepo(ProductDbContext dbContext) : base(dbContext)
    {
    }
}
