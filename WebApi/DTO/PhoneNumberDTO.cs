using System.ComponentModel.DataAnnotations;

namespace WebApi.DTO
{
    public class PhoneNumberDTO
    {
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
    }
}
