using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class TagEntity
    {
        [Key]
        public Guid TagID { get; set; }
        public string TagName { get; set; }

        // Navigation properties
        public ICollection<CategoryTagEntity> ProductTags { get; set; }
    }
}
