namespace WebApi.Models.Entities
{
    public class Image
    {
        public Guid ImageID { get; set; }
        public string ImageName { get; set; }
        public string ImagePath { get; set; }

        // Navigation properties
        public ICollection<ProductImage> ProductImages { get; set; }
    }
}
