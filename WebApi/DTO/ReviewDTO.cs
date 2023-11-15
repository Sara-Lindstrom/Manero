using System.ComponentModel.DataAnnotations;
using WebApi.Models.Entities;

namespace WebApi.DTO
{
    public class ReviewDTO
    {
        public string? Comment { get; set; }

        [Range(1, 5)]
        public int Rating { get; set; }

        [Required]
        public Guid? ProductId { get; set; }

        public string? UserID { get; set; }
        public DateTime ReviewDate { get; set; }
    }
}
