namespace WebApi.Models.Entities
{
    public class Size
    {
        public Guid SizeID { get; set; }
        public string SizeName { get; set; }

        // Navigation properties
        public ICollection<ProductSize> ProductSizes { get; set; }
    }
}
