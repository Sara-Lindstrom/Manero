namespace WebApi.Models.Entities
{
    public class ProductImageEntity
    {
        public Guid ProductImageID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ImageID { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        public ImageEntity Image { get; set; }
    }
}
