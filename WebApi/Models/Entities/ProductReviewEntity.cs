using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ProductReviewEntity
    {
        [Key]
        public Guid ReviewID { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime ReviewDate { get; set; }

        [JsonIgnore]
        [ForeignKey("ProductID")]
        public Guid ProductID { get; set; }
        public ProductEntity Product { get; set; }

        [JsonIgnore]
        [ForeignKey("UserID")]
        public string UserID { get; set; }
        public UserModel User { get; set; }
    }
}