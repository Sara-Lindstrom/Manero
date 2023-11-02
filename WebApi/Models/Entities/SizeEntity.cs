using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class SizeEntity
    {
        [Key]
        public Guid SizeID { get; set; }
        public string SizeName { get; set; }

        // Navigation properties
        public ICollection<ProductSizeEntity> ProductSizes { get; set; }
    }
}
