using Microsoft.EntityFrameworkCore;
using WebApi.Models.Entities;

namespace WebApi.Context
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions options) : base(options)
        {
        }

        DbSet<CategoryEntity> Categories { get; set; }
        DbSet<ColorEntity> Colors { get; set; }
        DbSet<ImageEntity> Images { get; set; }
        DbSet<ProductCategoryEntity> ProductCategories { get; set; }
        DbSet<ProductColorEntity> ProductColors { get; set; }
        DbSet<ProductEntity> Products { get; set; }
        DbSet<ProductImageEntity> ProductImages { get; set; }
        DbSet<ProductReviewEntity> ProductReviews { get; set; }
        DbSet<ProductSizeEntity> ProductSizes { get; set; }
        DbSet<CategoryTagEntity> CategoryTags  { get; set; }
        DbSet<SizeEntity> Sizes { get; set; }
        DbSet<TagEntity> Tags { get; set; }
    }
}
