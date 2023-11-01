namespace WebApi.Models.Entities
{
    public class Tag
    {
        public Guid TagID { get; set; }
        public string TagName { get; set; }

        // Navigation properties
        public ICollection<ProductTag> ProductTags { get; set; }
    }
}
