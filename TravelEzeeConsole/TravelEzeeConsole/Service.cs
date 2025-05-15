using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class Service
    {
        public int ServiceNumber { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public ServiceType Type { get; set; }
        public double Distance { get; set; }

        public Service(int serviceNumber, string from, string to, ServiceType type, double distance)
        {
            ServiceNumber = serviceNumber;
            From = from;
            To = to;
            Type = type;
            Distance = distance;
        }

        public override string ToString()
        {
            return $"[{ServiceNumber}] {From} -> {To}, Type: {Type}, Distance: {Distance} km";
        }
    }
}
