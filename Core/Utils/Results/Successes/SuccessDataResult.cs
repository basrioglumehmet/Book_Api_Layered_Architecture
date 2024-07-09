using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Utilities.Responses;
using Core.Utilities.Results.Bases;

namespace Core.Utilities.Results.Successes
{
    public class SuccessDataResult<TData> : BaseDataResult<TData>, IDataResult<TData>
    {
        public SuccessDataResult(TData data) : base(data, true)
        {
        }

        public SuccessDataResult(TData data, bool success, string message) : base(data, true, message)
        {
        }
    }
}
