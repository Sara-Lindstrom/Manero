using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class CategoryTagEntity
    {
        [Key]
        public Guid CategoryTagID { get; set; }
        public Guid CategoryID { get; set; }
        public Guid TagID { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(CategoryID))]
        public CategoryEntity Category { get; set; }

        [JsonIgnore]
        [ForeignKey(nameof(TagID))]
        public TagEntity Tag { get; set; }
    }
}
