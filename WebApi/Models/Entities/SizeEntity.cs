using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class SizeEntity
    {
        [Key]
        public Guid SizeID { get; set; }
        public string SizeName { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ICollection<ProductSizeEntity> ProductSizes { get; set; }
    }
}
