namespace WebApi.Models.Entities
{
    public class SizeEntity
    {
        public Guid SizeID { get; set; }
        public string SizeName { get; set; }

        // Navigation properties
        public ICollection<ProductSizeEntity> ProductSizes { get; set; }
    }
}
