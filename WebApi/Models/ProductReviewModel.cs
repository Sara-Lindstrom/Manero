namespace WebApi.Models;

public class ProductReviewModel
{
    public Guid ReviewID { get; set; }
    public Guid ProductID { get; set; }
    public string UserID { get; set; }
    public string Comment { get; set; }
    public int Rating { get; set; }
    public DateTime ReviewDate { get; set; }
}
