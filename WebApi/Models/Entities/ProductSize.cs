namespace WebApi.Models.Entities
{
    public class ProductSize
    {
        public Guid ProductSizeID { get; set; }
        public Guid ProductID { get; set; }
        public Guid SizeID { get; set; }

        // Navigation properties
        public Product Product { get; set; }
        public Size Size { get; set; }
    }
}
