using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Utils.Results.Bases;

namespace Core.Utils.Results.Successes
{
    public class SuccessResult : BaseResult
    {
        public SuccessResult(bool success) : base(success)
        {
        }

        public SuccessResult(bool success, string message) : base(success, message)
        {
        }
    }
}
