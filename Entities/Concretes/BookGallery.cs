using Entities.Abstracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concretes
{
    [Table("book_galleries")]
    public class BookGallery : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public string Src { get; set; }
        // Foreign key
        public Guid BookId { get; set; }
        // Navigation property
        public virtual Book Book { get; set; } // Navigation property to Book entity
    }
}
