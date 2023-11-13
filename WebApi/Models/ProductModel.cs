using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.X509Certificates;
using WebApi.Models.Entities;

namespace WebApi.Models
{
    public class ProductModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public decimal price { get; set; }
        public decimal? salesPrice { get; set; }
        public double? rating { get; set; }
        public DateTime createdDate { get; set; }

        public List<ProductReviewEntity>? reviews { get; set; }
        public List<string>? categories { get; set; }
        public List<string>? sizes { get; set; }
        public List<string>? colors { get; set; }
        public List<ImageEntity>? images { get; set; }

        public static implicit operator ProductModel(ProductEntity productEntity)
        {
            var _productModel = new ProductModel
            {
                id = productEntity.ProductID.ToString(),
                name = productEntity.ProductName,
                description = productEntity.Description,
                price = productEntity.Price,
                salesPrice = productEntity.SalePrice,
                rating = productEntity.Rating,
                createdDate = productEntity.CreatedDate,

                reviews = productEntity.ProductReviews?.ToList() ?? null,
                categories = productEntity.ProductCategories?.Where(pc => pc.Category != null).Select(pc => pc.Category.CategoryName).ToList() ?? null,
                sizes = productEntity.ProductSizes?.Where(pc => pc.Size != null).Select(ps => ps.Size.SizeName).ToList() ?? null,
                colors = productEntity.ProductColors?.Where(pc => pc.Color != null).Select(pc => pc.Color.ColorName).ToList() ?? null,
                images = productEntity.ProductImages?.Where(pc => pc.Image != null).Select(pi => pi.Image).ToList() ?? null
            };
            return _productModel;
        }
    }
}
