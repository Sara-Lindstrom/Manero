namespace WebApi.Models.Entities
{
    public class Category
    {
        public Guid CategoryID { get; set; }
        public string CategoryName { get; set; }

        // Navigation properties
        public ICollection<ProductCategory> ProductCategories { get; set; }
    }
}
