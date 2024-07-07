using DataAccess.Concretes.EntityFramework;
using Entities.Concretes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly BookStoreDbContext _dbContext; //Otomatik DI EF Core

        public BookController(BookStoreDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET: api/<BookController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_dbContext.Books.ToList());
        }

        // GET api/<BookController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BookController>
        [HttpPost]
        public void Post([FromBody] Book entity)
        {
            var added = _dbContext.Books.Add(entity);
            added.State = EntityState.Added;
            _dbContext.SaveChanges();
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
