﻿using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApi.Models.Entities
{
    public class ColorEntity
    {
        [Key]
        public Guid ColorID { get; set; }
        public string ColorName { get; set; }

        // Navigation properties
        [JsonIgnore]
        public ICollection<ProductColorEntity> ProductColors { get; set; }
    }
}
