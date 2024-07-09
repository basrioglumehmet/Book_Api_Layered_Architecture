using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstracts
{
    public interface IBusinessService<T>
    {
        void Add(T entity);
        void Update(T entity);
        List<T> GetAll();
        T GetById(Guid id);
    }
}
