using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductEntity
    {
        [Key]
        public Guid ProductID { get; set; }
        public string ProductName { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? SalePrice { get; set; }
        public string Description { get; set; }
        public double? Rating { get; set; } // Nullable double for rating
        public DateTime CreatedDate { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ICollection<ProductCategoryEntity> ProductCategories { get; set; }

        [JsonIgnore]
        public ICollection<CategoryTagEntity> ProductTags { get; set; }

        [JsonIgnore]
        public ICollection<ProductColorEntity> ProductColors { get; set; }

        [JsonIgnore]
        public ICollection<ProductSizeEntity> ProductSizes { get; set; }

        [JsonIgnore]
        public ICollection<ProductImageEntity> ProductImages { get; set; }

        [JsonIgnore]
        public ICollection<ProductReviewEntity> ProductReviews { get; set; }
    }
}
