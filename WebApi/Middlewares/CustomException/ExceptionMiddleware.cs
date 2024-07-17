using Core.Utils.Results.Errors;
using Core.CrossCuttingConcerns.Exceptions;
using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Utils;

namespace WebApi.Middlewares.CustomException
{
    public class ExceptionMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                await InvokeAsyncErrorHandler(context, ex);
            }
        }

        private Task InvokeAsyncErrorHandler(HttpContext context, Exception ex)
        {
            context.Response.ContentType = "application/json";

            HttpStatusCode statusCode;
            string message;
            object data = null;

            if (ex is ResultException<Core.Utils.IResult> resultException)
            {
                statusCode = resultException.StatusCode;
                message = resultException.Message;
            }
            else if (ex is ResultException<IDataResult<object>> dataResultException)
            {
                statusCode = dataResultException.StatusCode;
                message = dataResultException.Message;
                data = dataResultException.Data; // IDataResult<TData> türündeki data döndürülür
            }
            else
            {
                statusCode = HttpStatusCode.InternalServerError;
                message = ex.GetBaseException().Message;
            }

            context.Response.StatusCode = (int)statusCode;

            // IDataResult<TData> veya IResult türünde bir ErrorDataResult örneği oluşturulması
            if (data != null)
            {
                // IDataResult<TData> türünde ErrorDataResult örneği oluşturulması
                var errorResponse = new ErrorDataResult<object>((object)data, message);
                var jsonResponse = JsonSerializer.Serialize(errorResponse);
                return context.Response.WriteAsync(jsonResponse);
            }
            else
            {
                var errorResponse = new ErrorResult(message);
                var jsonResponse = JsonSerializer.Serialize(errorResponse);
                return context.Response.WriteAsync(jsonResponse);
            }
        }
    }
}
