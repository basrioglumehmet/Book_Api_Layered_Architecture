using Core.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Core.CrossCuttingConcerns.Exceptions
{
    //IResult'lar için kullanacağımız exception alt yapısı
    public class ResultException<T> : Exception where T : Core.Utils.IResult
    {
        public HttpStatusCode StatusCode { get; }

        public ResultException(HttpStatusCode code, T result) : base(result.Message)
        {
            StatusCode = code;
        }
    }
}
