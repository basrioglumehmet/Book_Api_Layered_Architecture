using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Utils;

namespace Core.Utils.Results.Bases
{
    public class BaseDataResult<T> : BaseResult, IDataResult<T>
    {
        public BaseDataResult(T data, bool success, string message) : base(success, message)
        {
            Data = data;
        }

        public BaseDataResult(T data, bool success) : base(success)
        {
            Data = data;
        }
        public T Data { get; }
    }
}
