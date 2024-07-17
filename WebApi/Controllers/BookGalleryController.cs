using AutoMapper;
using Business.Abstracts;
using Entities.Concretes;
using Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookGalleryController : Controller
    {

        private readonly IBookGalleryService _bookGalleryService;
        private readonly IMapper _mapper;

        public BookGalleryController(IBookGalleryService bookGalleryService, IMapper mapper)
        {
            _bookGalleryService = bookGalleryService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_bookGalleryService.GetAll());
        }

        [HttpPost]
        public IActionResult Post([FromBody] BookGalleryDto entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            BookGallery converted = _mapper.Map<BookGallery>(entity);
            _bookGalleryService.Add(converted);

            return Ok(converted);
        }

    }
}
