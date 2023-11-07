using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductImageEntity
    {
        [Key]
        public Guid ProductImageID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ImageID { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        public ImageEntity Image { get; set; }
    }
}
