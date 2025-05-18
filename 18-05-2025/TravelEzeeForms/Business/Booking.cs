using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    public class Booking
    {
        public int Source { get; set; }
        public int Destination { get; set; }
        public int Seatno{ get; set; }
        public override string ToString()
        {
            return $"Source: {Source} - Destination: {Destination} - SeatNo: {Seatno}";
        }

        public string GetBookingdetails()
        {
            return $"{Source},{Destination},{Seatno}";
        }

    }
}