using Entities.Abstracts;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concretes
{
    public class Book : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string? Name { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? Author { get; set; } = string.Empty;
        public string? Brand { get; set; } = string.Empty;
        public string? Category { get; set; } = string.Empty;

        public double Price { get; set; } = 0;

        public int Quantity { get; set; } = 0;

        // Navigation property
        public virtual ICollection<BookGallery> BookGalleries { get; set; } // Collection navigation property
    }
}
