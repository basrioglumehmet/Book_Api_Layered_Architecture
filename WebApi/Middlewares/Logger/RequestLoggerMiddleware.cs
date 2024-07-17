using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.IO;
using System;
using Core.CrossCuttingConcerns.Logger.Abstracts;

namespace WebApi.Middlewares.Logger
{
    public class RequestLoggerMiddleware : RequestLogger
    {
        private readonly RequestDelegate _next;

        public RequestLoggerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public override string XForwardedIp { get; set; }
        public override string Message { get; set; }
        public override string HttpMethod { get; set; }

        public override void LogAsDebug(string message)
        {
            Console.WriteLine($"Debug: {message}");
        }

        public override void LogAsFile(string message)
        {
            var logDirPath = Path.Combine(AppContext.BaseDirectory, "logs");
            var logFilePath = Path.Combine(logDirPath, "request_log.txt");

            try
            {
                Directory.CreateDirectory(logDirPath);
                File.AppendAllText(logFilePath, $"{DateTime.Now}: {message}\n");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while writing to log file: {ex.Message}");
                throw;
            }
        }



        public async Task Invoke(HttpContext context)
        {
            XForwardedIp = context.Request.Headers["X-Forwarded-For"].FirstOrDefault()
                ?? context.Connection.RemoteIpAddress.ToString();
            HttpMethod = context.Request.Method;
            Message = $"HTTP {HttpMethod} request from {XForwardedIp}";

            LogAsDebug(Message);
            LogAsFile(Message);

            await _next(context);
        }
    }
}
