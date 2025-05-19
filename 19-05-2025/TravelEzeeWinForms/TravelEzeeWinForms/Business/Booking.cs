using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeManagement
{
    public class Booking
    {
        public int Start { get; set; }
        public int Dest { get; set; }
        public int SeatNo { get; set; }
        public override string ToString()
        {
            return $"Source: {Start} - Destination: {Dest} - SeatNumber: {SeatNo}";
        }
        public string GetBook()
        {
            return $"{Start},{Dest},{SeatNo}";
        }
    }
}