namespace WebApi.Models.Entities
{
    public class ProductCategory
    {
        public Guid ProductCategoryID { get; set; }
        public Guid ProductID { get; set; }
        public Guid CategoryID { get; set; }

        // Navigation properties
        public Product Product { get; set; }
        public Category Category { get; set; }
    }
}
