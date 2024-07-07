using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController] //HttpResponse döneceğini tanıtıyorum
    [Route("api/[controller]")] //[controller] ile route attribute kullanarak weatherforecast endpointine ait olduğunu belirtiyorum.
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")] //HttpGet method işlemini tanımıdır Name field endpoint çağrı adresidir
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        /*
         *  FromBody: Http request inin body'si içerisinde gönderilen parametreleri okumak için kullanılır.
            FromQuery: Url içerisine gömülen parametreleri okumak için kullanılan attribute dur.
            FromRoute: Endpoint url'i içerisinde gönderilen parametreleri okumak için kullanılır. Yaygın olarak resource'a ait id bilgisi okurken kullanılır.
        */

        [HttpPost]
        public WeatherForecast Create([FromBody] WeatherForecast data)
        {
            return data;
        }

        [HttpDelete]
        public void Delete([FromBody] string id) { }

        [HttpPut]
        public void Update([FromBody] WeatherForecast data) { }
    }
}
