using AutoMapper;
using Business.Abstracts;
using Business.Concretes;
using Core.Utils.Profiles;
using DataAccess.Abstracts;
using DataAccess.Concretes.EntityFramework;
using DataAccess.Concretes.EntityFramework.Dal;
using System.Reflection;
using WebApi.Middlewares.CustomException;
using WebApi.Middlewares.Logger;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

//JSON loop cycle sorunun çözümüdür. Lazy fetch ve eager fetceh yaparken bu sorun yaşanabilir.
builder.Services.AddControllers().AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
builder.Services.AddDbContext<BookStoreDbContext>();
builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(MapperProfile));

//IoC
builder.Services.AddSingleton<IBookService,BookManager>();
builder.Services.AddSingleton<IBookGalleryService, BookGalleryManager>();
builder.Services.AddSingleton<IBookDal,EfBookDal>();
builder.Services.AddSingleton<IBookGalleryDal, EfBookGalleryDal>();
builder.Services.AddTransient<ExceptionMiddleware>();
//builder.Services.AddControllers().AddNewtonsoftJson(x =>
// x.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

//JSON Loop Önlemi


var app = builder.Build();

//Cors
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173"));

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) //Development ortamnın ayarları burada yer alır
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseExceptionMiddleware();
app.UseRequestLogger();
app.UseAuthorization();
app.MapControllers();

app.Run();
