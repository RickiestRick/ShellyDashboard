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
    public class ConnectionController : ControllerBase
    {
        private readonly ConnectionService _connectionService;
        private readonly ShellyService _shellyService;

        public ConnectionController(ConnectionService connectionService, ShellyService shellyService)
        {
            _connectionService = connectionService;
            _shellyService = shellyService;
        }
        public List<Shelly> ScanNetworkForShellies()
        {
            return null;
        }

        public List<Shelly> CheckConnectionStatesOfShellies()
        {
            return null;
        }

        [HttpPost(nameof(CheckConnectionStateOfShelly))]
        public bool CheckConnectionStateOfShelly([FromBody]Shelly s)
        {

          return  _connectionService.GetConnectionState(s);
        }



        [HttpGet(nameof(CheckConnectionStateOfShelly))]
        public bool CheckConnectionStateOfShelly(int ID)
        {
            var Shelly=_shellyService.GetShellyByID(ID);
           return _connectionService.GetConnectionState(Shelly);
        }

    }
}
