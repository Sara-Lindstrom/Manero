using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class ProductColorEntity
    {
        [Key]
        public Guid ProductColorID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ColorID { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        public ColorEntity Color { get; set; }
    }
}
