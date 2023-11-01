namespace WebApi.Models.Entities
{
    public class ProductCategoryEntity
    {
        public Guid ProductCategoryID { get; set; }
        public Guid ProductID { get; set; }
        public Guid CategoryID { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        public CategoryEntity Category { get; set; }
    }
}
