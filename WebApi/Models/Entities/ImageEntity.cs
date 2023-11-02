using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class ImageEntity
    {
        [Key]
        public Guid ImageID { get; set; }
        public string ImageName { get; set; }
        public string ImagePath { get; set; }

        // Navigation properties
        public ICollection<ProductImageEntity> ProductImages { get; set; }
    }
}
