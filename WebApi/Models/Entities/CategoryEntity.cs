using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class CategoryEntity
    {
        [Key]
        public Guid CategoryID { get; set; }
        public string CategoryName { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ICollection<ProductCategoryEntity> ProductCategories { get; set; }

        [JsonIgnore]
        public ICollection<CategoryTagEntity> CategoryTags { get; set; }
    }
}
