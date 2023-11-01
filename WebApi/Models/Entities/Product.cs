namespace WebApi.Models.Entities
{
    public class Product
    {
        public Guid ProductID { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public decimal SalePrice { get; set; }
        public string Description { get; set; }
        public double? Rating { get; set; } // Nullable double for rating

        // Navigation properties
        public ICollection<ProductCategory> ProductCategories { get; set; }
        public ICollection<ProductTag> ProductTags { get; set; }
        public ICollection<ProductColor> ProductColors { get; set; }
        public ICollection<ProductSize> ProductSizes { get; set; }
        public ICollection<ProductImage> ProductImages { get; set; }
        public ICollection<ProductReview> ProductReviews { get; set; }
    }
}
