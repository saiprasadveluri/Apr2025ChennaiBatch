using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class ride
    {
        public int RideId { get; set; }
        public customer RideCustomer { get; set; }
        public driver RideDriver { get; set; }
        public DateTime StartTime { get; private set; }
        public DateTime EndTime { get; private set; }
        public decimal Fare { get; private set; }

        public void StartRide()
        {
            StartTime = DateTime.Now;
            Console.WriteLine("Ride started!");
        }

        public void CompleteRide()
        {
            EndTime = DateTime.Now;
            Fare = CalculateFare();
            Console.WriteLine($"Ride completed! Fare: {Fare}");
        }

        private decimal CalculateFare()
        {
            return (decimal)(EndTime - StartTime).TotalMinutes * 2;
        }
    }
}
