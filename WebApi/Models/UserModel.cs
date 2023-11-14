using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;
using WebApi.Models.Entities;

namespace WebApi.Models
{
    public class UserModel : IdentityUser
    {
        public bool RememberMe { get; set; }

        public ICollection<Address> Addresses { get; set; }
        public ICollection<CartItemEntity> CartItems { get; set; }

        [JsonIgnore]
        public ICollection<ProductReviewEntity> ProductReviews { get; set; }

    }
}
