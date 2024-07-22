using Core.Utils;
using Entities.Concretes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstracts
{
    public interface IBookService : IBusinessService<Book>
    {
        public IResult SearchBooksByNameOrCategoryOrBrand(string keyword);
        public IResult GetByNameId(string nameId);

    }
}
