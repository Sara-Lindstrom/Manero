namespace WebApi.Models.Entities
{
    public class ProductImage
    {
        public Guid ProductImageID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ImageID { get; set; }

        // Navigation properties
        public Product Product { get; set; }
        public Image Image { get; set; }
    }
}
