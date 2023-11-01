namespace WebApi.Models.Entities
{
    public class Color
    {
        public Guid ColorID { get; set; }
        public string ColorName { get; set; }

        // Navigation properties
        public ICollection<ProductColor> ProductColors { get; set; }
    }
}
