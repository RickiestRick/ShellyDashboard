using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShellyDashboard.Models
{
    public class Shelly
    {
        public string Name { get; set; }
        public int ShellyID { get; set; }
        public bool ConnectionState { get; set; }
        public int ShellyType { get; set; }
        public string IP { get; set; }
    }
}
