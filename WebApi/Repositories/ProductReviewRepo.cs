using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebApi.Context;
using WebApi.Models.Entities;

namespace WebApi.Repositories;

public class ProductReviewRepo : Repo<ProductReviewEntity, ProductDbContext>
{

    private readonly ProductDbContext _dbContext;

    public ProductReviewRepo(ProductDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<ProductReviewEntity> CreateReviewAsync(ProductReviewEntity reviewEntity)
    {
        try
        {
            _dbContext.Set<ProductReviewEntity>().Add(reviewEntity);
            await _dbContext.SaveChangesAsync();
            return reviewEntity;
        }
        catch (Exception ex)
        {
            // Logga eller hantera felet på lämpligt sätt
            Debug.WriteLine("Error saving to the database: " + ex.Message);
            return null; // eller throw exception om du vill signalera fel uppåt
        }
    }


}
