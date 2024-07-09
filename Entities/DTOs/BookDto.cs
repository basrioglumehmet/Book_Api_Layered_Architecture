using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public class BookDto
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Author { get; set; }

        public double Price { get; set; }

        public int Quantity { get; set; }
    }
}
