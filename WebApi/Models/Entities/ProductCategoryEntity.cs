using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductCategoryEntity
    {
        [Key]
        public Guid ProductCategoryID { get; set; }
        public Guid ProductID { get; set; }
        public Guid CategoryID { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        public CategoryEntity Category { get; set; }
    }
}
