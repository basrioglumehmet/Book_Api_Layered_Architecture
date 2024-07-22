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
    [Table("book_comments")]
    public class BookComment : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string comment { get; set; }
        //Foreign Key (Many to One)
        public Guid UserId { get; set; }
        //ForeignKey
        public Guid BookId { get; set; }
        // Navigation property to Book entity
        public virtual Book Book { get; set; }
        public virtual User User { get; set; }


    }
}
