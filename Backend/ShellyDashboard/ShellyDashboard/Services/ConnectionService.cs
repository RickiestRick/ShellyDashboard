using ShellyDashboard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;

namespace ShellyDashboard.Services
{
    public class ConnectionService
    {
        public bool GetConnectionState(Shelly shelly)
        {
            Ping pingSender = new Ping();
            var reply = pingSender.Send(shelly.IP);
            if (reply.Status == IPStatus.Success)
            {
                return true;
            }
            return false;
        }
    }
}
