using AutoMapper;
using Business.Abstracts;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utils.Results.Errors;
using DataAccess.Concretes.EntityFramework;
using Entities.Concretes;
using Entities.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        private readonly IMapper _mapper;

        public BookController(IMapper _mapper, IBookService bookService)
        {
            this._bookService = bookService;
            this._mapper = _mapper;
        }
        // GET: api/<BookController>
        [HttpGet]
        public IActionResult Get()
        {
            //Core.Utils.Results.Errors.ErrorResult result = new ErrorResult("An Unexpected Error: Get All Data");
            //throw new ResultException<ErrorResult>(HttpStatusCode.Moved, result);
            return Ok(_bookService.GetAll());
        }

        // GET api/<BookController>/5
        [HttpGet("{nameId}")]
        public IActionResult Get(string nameId)
        {
            return Ok(_bookService.GetByNameId(nameId));
        }

        [HttpGet("/search/{keyword}")]
        public IActionResult SearchBooksByNameOrCategoryOrBrand(string keyword)
        {
            return Ok(_bookService.SearchBooksByNameOrCategoryOrBrand(keyword));
        }

        // POST api/<BookController>
        [HttpPost]
        public void Post([FromBody] BookDto entity)
        {
            var book = _mapper.Map<Book>(entity);
            _bookService.Add(book);
        }

        // PUT api/<BookController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BookController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
