using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models.Entities
{
    public class CartItemEntity
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Product")]
        public Guid ProductId { get; set; }
        public ProductEntity Product { get; set; }

        public int Quantity { get; set; }

        [ForeignKey("UserModel")]
        public string UserId { get; set; }
        public UserModel User { get; set; }
    }
}
