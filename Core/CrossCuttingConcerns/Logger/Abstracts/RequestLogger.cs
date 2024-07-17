using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.CrossCuttingConcerns.Logger.Abstracts
{
    public abstract class RequestLogger
    {
        public abstract string XForwardedIp { get; set; }
        public abstract string Message { get; set; }
        public abstract string HttpMethod { get; set; }

        public abstract void LogAsDebug(string message);
        public abstract void LogAsFile(string message);
    }
}
