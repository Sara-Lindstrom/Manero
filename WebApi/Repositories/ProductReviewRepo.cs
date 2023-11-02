using Microsoft.EntityFrameworkCore;
using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories;

public class ProductReviewRepo : Repo<ProductReviewEntity, ProductDbContext>
{
    public ProductReviewRepo(ProductDbContext dbContext) : base(dbContext)
    {
    }

}
