using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class CategoryTagEntity
    {
        [Key]
        public Guid CategoryTagID { get; set; }
        public Guid CategoryID { get; set; }
        public Guid TagID { get; set; }
    }
}
