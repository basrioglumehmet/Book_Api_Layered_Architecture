using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concretes
{
    [Table("payments")]
    public class Payment
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public DateTime PaymentDate { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMethod { get; set; } // Example: "Credit Card", "PayPal", "Bank Transfer"
        public string TransactionId { get; set; }

        public virtual Order Order { get; set; }
    }
}