namespace WebApi.Models.Entities
{
    public class ProductColor
    {
        public Guid ProductColorID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ColorID { get; set; }

        // Navigation properties
        public Product Product { get; set; }
        public Color Color { get; set; }
    }
}
