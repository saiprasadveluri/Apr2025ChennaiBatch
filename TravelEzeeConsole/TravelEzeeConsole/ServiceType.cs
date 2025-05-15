using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class ServiceType
    {
        public int ServiceTypeid {  get; set; }
        public string ServiceTypename { get; set; }
        public int MaxSeatCap {  get; set; }
        public double ChargePerKm {  get; set; }
    }
}
