namespace WebApi.Models.Entities
{
    public class TagEntity
    {
        public Guid TagID { get; set; }
        public string TagName { get; set; }

        // Navigation properties
        public ICollection<ProductTagEntity> ProductTags { get; set; }
    }
}
