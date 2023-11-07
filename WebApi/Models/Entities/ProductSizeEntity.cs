using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductSizeEntity
    {
        [Key]
        public Guid ProductSizeID { get; set; }
        public Guid ProductID { get; set; }
        public Guid SizeID { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        public SizeEntity Size { get; set; }
    }
}
