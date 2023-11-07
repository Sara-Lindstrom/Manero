using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ImageEntity
    {
        [Key]
        public Guid ImageID { get; set; }
        public string? ImageName { get; set; }
        public string ImagePath { get; set; } = null!;

        // Navigation properties
        [JsonIgnore]
        public ICollection<ProductImageEntity> ProductImages { get; set; }
    }
}
