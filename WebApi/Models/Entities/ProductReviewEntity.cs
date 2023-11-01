namespace WebApi.Models.Entities
{
    public class ProductReviewEntity
    {
        public Guid ReviewID { get; set; }
        public Guid ProductID { get; set; }
        public Guid UserID { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
        public DateTime ReviewDate { get; set; }

        // Navigation properties
        public ProductEntity Product { get; set; }
        // Assuming you have a User entity
        public User User { get; set; }
    }
}
