using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Ride
    {
        public int RideId { get; set; }
        public string PickUpLocation {get;set;}
        public string DropLocation { get; set; }
        public Customer RideCustomer { get; set; }
        public Driver RideDriver { get; set; }
        public DateTime StartTime { get; private set; }
        public DateTime EndTime { get; private set; }
        public bool IsCompleted { get; private set; }

        public Ride(int id,string pickuplocation,string droplocation, Customer customer, Driver driver)
        {
            RideId = id;
            RideCustomer = customer;
            RideDriver = driver;
            IsCompleted = false;
            PickUpLocation = pickuplocation;
            DropLocation = droplocation;
        }

        public void StartRide()
        {
            StartTime = DateTime.Now;
            Console.WriteLine($"Ride {RideId} started at: {StartTime}");
        }

        public void CompleteRide()
        {
            EndTime = DateTime.Now;
            IsCompleted = true;
            Console.WriteLine($"Ride {RideId} completed at: {EndTime}");
        }
    }
}
