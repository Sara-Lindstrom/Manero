using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class UserUpdateModel
    {
        [Required]
        [MinLength(2)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Phone]
        public string PhoneNumber { get; set; }
    }
}
