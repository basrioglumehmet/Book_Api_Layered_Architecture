using Core.Utilities.Responses;
using Core.Utilities.Results.Bases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Utilities.Results.Errors
{
    public class ErrorDataResult<TData> : BaseDataResult<TData>, IDataResult<TData>
    {
        public ErrorDataResult(TData data) : base(data, false)
        {
        }

        public ErrorDataResult(TData data, string message) : base(data, false, message)
        {
        }
    }
}
