using Entities.Concretes;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.ValidationRules.FluentValidation
{
    public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(book => book.Author).NotEmpty();
            RuleFor(book => book.Description).NotEmpty();
            RuleFor(book => book.Name).NotEmpty();
            RuleFor(book => book.Price).NotEmpty().GreaterThan(0);
        }
    }
}
