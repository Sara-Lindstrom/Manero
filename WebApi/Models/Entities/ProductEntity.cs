namespace WebApi.Models.Entities
{
    public class ProductEntity
    {
        public Guid ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public decimal SalePrice { get; set; }
        public string Description { get; set; }
        public double? Rating { get; set; } // Nullable double for rating

        // Navigation properties
        public ICollection<ProductCategoryEntity> ProductCategories { get; set; }
        public ICollection<ProductTagEntity> ProductTags { get; set; }
        public ICollection<ProductColorEntity> ProductColors { get; set; }
        public ICollection<ProductSizeEntity> ProductSizes { get; set; }
        public ICollection<ProductImageEntity> ProductImages { get; set; }
        public ICollection<ProductReviewEntity> ProductReviews { get; set; }
    }
}
