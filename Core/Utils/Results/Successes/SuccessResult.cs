using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Utilities.Results.Bases;

namespace Core.Utilities.Results.Successes
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
