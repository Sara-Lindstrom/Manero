using Microsoft.EntityFrameworkCore;
using WebApi.Models.Entities;

namespace WebApi.Seeds;

public static class ProductDbSeeds
{
    public static void SeedData(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoryEntity>().HasData(
            new CategoryEntity { CategoryID = Guid.NewGuid(), CategoryName = "men" },
            new CategoryEntity { CategoryID = Guid.NewGuid(), CategoryName = "woman" },
            new CategoryEntity { CategoryID = Guid.NewGuid(), CategoryName = "kid" },
            new CategoryEntity { CategoryID = Guid.NewGuid(), CategoryName = "accessories" }
        );

        modelBuilder.Entity<ColorEntity>().HasData(
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "red"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "green"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "blue"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "black"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "white"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "brown"},
            new ColorEntity { ColorID = Guid.NewGuid(), ColorName = "yellow"}
        );

        modelBuilder.Entity<ImageEntity>().HasData(
            new ImageEntity { ImageID = Guid.NewGuid(), ImageName = "party parrot", ImagePath = "https://ih1.redbubble.net/image.293970198.3497/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" },
            new ImageEntity { ImageID = Guid.NewGuid(), ImageName = "", ImagePath = ""},
            new ImageEntity { ImageID = Guid.NewGuid(), ImageName = "", ImagePath = ""}
        );

        modelBuilder.Entity<SizeEntity>().HasData(
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "xxs"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "xs"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "s"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "m"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "l"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "xl"},
            new SizeEntity { SizeID = Guid.NewGuid(), SizeName = "xxl" }
        );

        modelBuilder.Entity<TagEntity>().HasData(
            new TagEntity { TagID = Guid.NewGuid(), TagName="shirts"},    
            new TagEntity { TagID = Guid.NewGuid(), TagName="pants"},    
            new TagEntity { TagID = Guid.NewGuid(), TagName="outdoors"},    
            new TagEntity { TagID = Guid.NewGuid(), TagName="sports"},    
            new TagEntity { TagID = Guid.NewGuid(), TagName="shoes"},    
            new TagEntity { TagID = Guid.NewGuid(), TagName="dresses"}
        );

        modelBuilder.Entity<ProductEntity>().HasData(
            new ProductEntity { 
                ProductID = Guid.NewGuid(), 
                ProductName = "", 
                Price = 12, 
                SalePrice = null, 
                Description = "", 
                Rating = 3, 
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.NewGuid(),
                ProductName = "",
                Price = 12,
                SalePrice = null,
                Description = "",
                Rating = 3,
                CreatedDate = DateTime.Now
            }
        );

        //modelBuilder.Entity<ProductCategoryEntity>().HasData();
        //modelBuilder.Entity<ProductColorEntity>().HasData();
        //modelBuilder.Entity<ProductImageEntity>().HasData();
        //modelBuilder.Entity<ProductReviewEntity>().HasData();
        //modelBuilder.Entity<ProductSizeEntity>().HasData();
        //modelBuilder.Entity<CategoryTagEntity>().HasData();
    }
}
