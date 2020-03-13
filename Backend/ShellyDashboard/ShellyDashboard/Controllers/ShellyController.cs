using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShellyDashboard.Models;
using ShellyDashboard.Services;

namespace ShellyDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShellyController : ControllerBase
    {
        private readonly ShellyService _shellyService;

        public ShellyController(ShellyService shellyService)
        {
            _shellyService = shellyService;
        }
        [HttpGet(nameof(GetShellies))]
        public List<Shelly> GetShellies()
        {
           return _shellyService.GetAllShellies();
        }

        [HttpPost(nameof(UpdateShelly))]
        public void UpdateShelly(int shellyID, [FromBody]Shelly shelly)
        {

        }

        public void AddShelly([FromBody]Shelly shelly)
        {
            _shellyService.AddShelly(shelly);

        }



    }
}
