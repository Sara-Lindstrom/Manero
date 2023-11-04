using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class UserEditProfile
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}