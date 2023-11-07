using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class TagEntity
    {
        [Key]
        public Guid TagID { get; set; }
        public string TagName { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ICollection<CategoryTagEntity> CategoryTags { get; set; }
    }
}
