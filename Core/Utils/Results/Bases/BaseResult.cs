using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Utils;

namespace Core.Utils.Results.Bases
{
    public class BaseResult : IResult
    {
        public BaseResult(bool success, string message) : this(success)
        {
            Message = message;
        }

        public BaseResult(bool success)
        {
            Success = success;
        }

        public bool Success { get; }

        public string Message { get; }
    }
}
