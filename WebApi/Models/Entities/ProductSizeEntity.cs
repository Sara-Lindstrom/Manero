using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class ProductSizeEntity
    {
        [Key]
        public Guid ProductSizeID { get; set; }
        public Guid ProductID { get; set; }
        public Guid SizeID { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        public SizeEntity Size { get; set; }
    }
}
