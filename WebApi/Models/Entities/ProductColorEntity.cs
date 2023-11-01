namespace WebApi.Models.Entities
{
    public class ProductColorEntity
    {
        public Guid ProductColorID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ColorID { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        public ColorEntity Color { get; set; }
    }
}
