namespace WebApi.Models.Entities
{
    public class CategoryEntity
    {
        public Guid CategoryID { get; set; }
        public string CategoryName { get; set; }

        // Navigation properties
        public ICollection<ProductCategoryEntity> ProductCategories { get; set; }
    }
}
