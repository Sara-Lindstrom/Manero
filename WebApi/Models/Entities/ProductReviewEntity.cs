using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductReviewEntity
    {
        [Key]
        public Guid ReviewID { get; set; }
        public Guid ProductID { get; set; }
        public string UserID { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime ReviewDate { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        public IdentityUser User { get; set; }
    }
}
