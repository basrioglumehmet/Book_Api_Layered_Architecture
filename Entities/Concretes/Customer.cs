using Core.Entities;
using Entities.Abstracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concretes
{
    [Table("customers")]
    public class Customer : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        //Navigation Property

        [Required]
        [MaxLength(15)]
        public string PhoneNumber { get; set; }

        [Required]
        [MaxLength(200)]
        public string Address { get; set; }


        //Navigation Property = One to many

        [Required]
        public User User { get; set; }
        public ICollection<BookComment> BookComments { get; set; }

        public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
    }
}
