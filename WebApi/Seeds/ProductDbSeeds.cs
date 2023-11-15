using Microsoft.EntityFrameworkCore;
using WebApi.Models.Entities;

namespace WebApi.Seeds;

public static class ProductDbSeeds
{
    public static void SeedData(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CategoryEntity>().HasData(
            new CategoryEntity { CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), CategoryName = "men" },
            new CategoryEntity { CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), CategoryName = "woman" },
            new CategoryEntity { CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), CategoryName = "kid" },
            new CategoryEntity { CategoryID = Guid.Parse("1a421152-cf67-4eda-af8e-61e490f9dddd"), CategoryName = "accessories" }
        );

        modelBuilder.Entity<ColorEntity>().HasData(
            new ColorEntity { ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ColorName = "red"},
            new ColorEntity { ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ColorName = "green"},
            new ColorEntity { ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ColorName = "blue"},
            new ColorEntity { ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ColorName = "black"},
            new ColorEntity { ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ColorName = "white"},
            new ColorEntity { ColorID = Guid.Parse("03c6863e-8c30-4087-a211-b72335617a3e"), ColorName = "brown"},
            new ColorEntity { ColorID = Guid.Parse("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), ColorName = "yellow"}
        );

        modelBuilder.Entity<ImageEntity>().HasData(
            new ImageEntity { ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ImageName = "party parrot", ImagePath = "https://ih1.redbubble.net/image.293970198.3497/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" },
            new ImageEntity { ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ImageName = "JulMust", ImagePath = "https://cdn2.cdnme.se/1970309/7-3/10613102_965889760093054_3668906844852005056_n_542e67509606ee4a4e88b4c2.jpg" }
        );

        modelBuilder.Entity<SizeEntity>().HasData(
            new SizeEntity { SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), SizeName = "xs"},
            new SizeEntity { SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), SizeName = "s"},
            new SizeEntity { SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), SizeName = "m"},
            new SizeEntity { SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), SizeName = "l"},
            new SizeEntity { SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), SizeName = "xl"}
        );

        modelBuilder.Entity<TagEntity>().HasData(
            new TagEntity { TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), TagName="shirts"},    
            new TagEntity { TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), TagName="pants"},    
            new TagEntity { TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), TagName="outdoors"},    
            new TagEntity { TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), TagName="sports"},    
            new TagEntity { TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), TagName="shoes"},    
            new TagEntity { TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), TagName="dresses"}
        );

        modelBuilder.Entity<ProductEntity>().HasData(
            new ProductEntity {
                ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379"),
                ProductName = "EleganceVogue Dress",
                Price = 12.12M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 3.5,
                CreatedDate = DateTime.Now.AddHours(-1)
    },
            new ProductEntity
            {
                ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"),
                ProductName = "UrbanChic Jeans",
                Price = 13.45M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 3.8,
                CreatedDate = DateTime.Now.AddHours(-1)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac"),
                ProductName = "CosmoFlair Blouse",
                Price = 12.99M,
                SalePrice = 10.20M,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 4.2,
                CreatedDate = DateTime.Now
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"),
                ProductName = "StrideFlex Sneakers",
                Price = 10.58M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 4.7,
                CreatedDate = DateTime.Now.AddHours(-2)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254"),
                ProductName = "AzureGlow Dress",
                Price = 16.12M,
                SalePrice = 11.98M,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 5,
                CreatedDate = DateTime.Now.AddHours(-2)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1"),
                ProductName = "GentleBreeze Shirt",
                Price = 16.89M,
                SalePrice = 13.78M,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 1.3,
                CreatedDate = DateTime.Now.AddHours(-3)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"),
                ProductName = "TwilightGlam Gown",
                Price = 19.50M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 1.7,
                CreatedDate = DateTime.Now.AddHours(-3)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"),
                ProductName = "TrendSetGo Jumpsuit",
                Price = 14.89M,
                SalePrice = 12.34M,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 2.6,
                CreatedDate = DateTime.Now.AddHours(-4)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad"),
                ProductName = "CottonCloud Pants",
                Price = 17.78M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 2.9,
                CreatedDate = DateTime.Now.AddHours(-4)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"),
                ProductName = "PeakPerforme Activewear",
                Price = 12.50M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 3,
                CreatedDate = DateTime.Now.AddHours(-5)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce"),
                ProductName = "UrbanBlend Sunglasses",
                Price = 17.78M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 2.9,
                CreatedDate = DateTime.Now.AddHours(-4)
            },
            new ProductEntity
            {
                ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7"),
                ProductName = "StrideFlex Belt",
                Price = 12.50M,
                SalePrice = null,
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.",
                Rating = 3,
                CreatedDate = DateTime.Now.AddHours(-5)
            }
        );

        ConnectionSeedData(modelBuilder);
    }

    public static void ConnectionSeedData(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ProductCategoryEntity>().HasData(
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },    
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("1a421152-cf67-4eda-af8e-61e490f9dddd"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductCategoryEntity { ProductCategoryID = Guid.NewGuid(), CategoryID = Guid.Parse("1a421152-cf67-4eda-af8e-61e490f9dddd"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") }
        );

        modelBuilder.Entity<ProductColorEntity>().HasData(
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },    
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },    
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },    
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },    
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9c397b76-f1b3-41fa-8864-ae1ea121e213"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("743a791b-0cee-4493-a888-e9e29efbedf7"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("03c6863e-8c30-4087-a211-b72335617a3e"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("03c6863e-8c30-4087-a211-b72335617a3e"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("03c6863e-8c30-4087-a211-b72335617a3e"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("c176069f-e0e5-456d-854a-a2d9d6fe0854"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("03c6863e-8c30-4087-a211-b72335617a3e"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("9d581bab-6476-4f85-8ad0-79931c753a67"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductColorEntity { ProductColorID = Guid.NewGuid(), ColorID = Guid.Parse("409911df-3613-49e3-adcb-2305a7bb1683"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") }
        );

        modelBuilder.Entity<ProductImageEntity>().HasData(
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },    
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("ea3065d9-43de-424c-8f19-d8b8c64a421e"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductImageEntity { ProductImageID = Guid.NewGuid(), ImageID = Guid.Parse("8cf79865-6503-425c-a82e-282269b19189"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") }
        );

        modelBuilder.Entity<ProductSizeEntity>().HasData(
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },

            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("9d7ff143-3e26-40ae-ab00-2fead9950a03"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },

            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("737cec84-034f-4e2d-b5d0-23c6ee424c66"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },

            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },

            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },
            new ProductSizeEntity { ProductSizeID = Guid.NewGuid(), SizeID = Guid.Parse("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") }
        );

        modelBuilder.Entity<CategoryTagEntity>().HasData(
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), CategoryID = Guid.Parse("7bce8f5a-6e92-4472-9168-eb4a8506c6bf") },

            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), CategoryID = Guid.Parse("e540be20-c17d-4e5a-aebd-0733c7955cdb") },

            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },
            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), CategoryID = Guid.Parse("b39664eb-6934-4dcd-986e-7c6cf0efb8c9") },

            new CategoryTagEntity { CategoryTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), CategoryID = Guid.Parse("1a421152-cf67-4eda-af8e-61e490f9dddd") }
        );

        modelBuilder.Entity<ProductTagEntity>().HasData(
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), ProductID = Guid.Parse("633328ef-6a33-44dc-88b2-934dc60a91ac") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), ProductID = Guid.Parse("209f2710-32b9-4fe7-9d04-470c931184a1") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("4a3914f7-deb4-4265-b869-57cc712f6896"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },

            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("971bbffb-1719-4e6e-89da-9ab5ab77a287"), ProductID = Guid.Parse("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },

            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), ProductID = Guid.Parse("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("bafb4114-a474-42c4-8088-9b0002aae502"), ProductID = Guid.Parse("4592ed37-1361-4761-a3dd-3654670006ce") },

            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), ProductID = Guid.Parse("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("8a6c018f-6b1c-4bca-beac-85dc2249748d"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },

            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), ProductID = Guid.Parse("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), ProductID = Guid.Parse("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), ProductID = Guid.Parse("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },

            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), ProductID = Guid.Parse("3e608840-6a94-476e-a147-50e3da35f379") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), ProductID = Guid.Parse("e120bec8-c592-47be-98a8-9569bac3b254") },
            new ProductTagEntity { ProductTagID = Guid.NewGuid(), TagID = Guid.Parse("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), ProductID = Guid.Parse("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") }
        );
    }
}
