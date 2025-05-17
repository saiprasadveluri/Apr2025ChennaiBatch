using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class Booking
    {
        public int BookingId { get; set; }
        public string ServNo {  get; set; }
        public DateTime TravelDate { get; set; }
        public List<PassengerEntry> PassengerList { get; set; }

    }
}
