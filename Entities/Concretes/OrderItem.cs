using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concretes
{
    [Table("order_items")]
    public class OrderItem
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public Guid BookId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }

        public virtual Order Order { get; set; }
        public virtual Book Book { get; set; }
    }
}