using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductTagEntity
    {
        [Key]
        public Guid ProductTagID { get; set; }
        public Guid ProductID { get; set; }
        public Guid TagID { get; set; }

        // Navigation properties
        [JsonIgnore]
        [ForeignKey(nameof(ProductID))]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(TagID))]
        public TagEntity Tag { get; set; }
    }
}
