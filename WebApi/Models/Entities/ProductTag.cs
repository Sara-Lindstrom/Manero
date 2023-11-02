namespace WebApi.Models.Entities
{
    public class ProductTag
    {
        public Guid ProductTagID { get; set; }
        public Guid ProductID { get; set; }
        public Guid TagID { get; set; }

        public virtual ICollection<ProductTag> ProductTags { get; set; }
    }
}
