using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Address
{
    public class Location
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string City { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Country { get; set; } = string.Empty;
    }

    public class Address
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string StreetName { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "char(6)")]
        public string PostalCode { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Title { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }

        public UserModel User { get; set; }

        [ForeignKey("LocationId")]
        public int LocationId { get; set; }

        public Location Location { get; set; }
    }
}
