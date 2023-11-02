using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class ColorEntity
    {
        [Key]
        public Guid ColorID { get; set; }
        public string ColorName { get; set; }

        // Navigation properties
        public ICollection<ProductColorEntity> ProductColors { get; set; }
    }
}
