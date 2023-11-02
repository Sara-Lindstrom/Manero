using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class ProductTagEntity
    {
        [Key]
        public Guid ProductTagID { get; set; }
        public Guid ProductID { get; set; }
        public Guid TagID { get; set; }

        public virtual ICollection<ProductTagEntity> ProductTags { get; set; }
    }
}
