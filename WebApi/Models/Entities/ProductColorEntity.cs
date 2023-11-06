using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductColorEntity
    {
        [Key]
        public Guid ProductColorID { get; set; }
        public Guid ProductID { get; set; }
        public Guid ColorID { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        public ColorEntity Color { get; set; }
    }
}
