using System.ComponentModel.DataAnnotations;

namespace WebApi.DTO
{
    public class PhoneNumberDTO
    {
        [Required]
        [RegularExpression(@"^\+\d{1,3}\s\d+$", ErrorMessage = "Phone number must be in the format +XX XXXXXXXXX.")]
        public string PhoneNumber { get; set; }
    }
}
