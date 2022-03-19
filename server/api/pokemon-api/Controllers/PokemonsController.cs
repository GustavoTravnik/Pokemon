using Microsoft.AspNetCore.Mvc;

namespace pokemon_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PokemonsController : ControllerBase
    {
        private readonly ILogger<PokemonsController> _logger;

        public PokemonsController(ILogger<PokemonsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<string> Get(string pokemonName)
        {
            return Ok(new { Name = "PIKA"});
        }
    }
}