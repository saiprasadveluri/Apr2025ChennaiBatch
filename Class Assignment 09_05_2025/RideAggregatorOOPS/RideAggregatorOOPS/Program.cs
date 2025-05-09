using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Create a driver & Customer
            Driver driver = new Driver("Sai", "99887766", 23, 4.7);
            Customer customer = new Customer("Durga", "76545", "Hyderabad");
            //Create Ride
            string pickup = "Central";
            string drop = "KPHB";
            Ride ride= new Ride(driver, customer, pickup, drop);
            //Perform actions
            string startStatus= ride.StartRide();
            Console.WriteLine(startStatus);
            string completionStatus=ride.CompleteRide();
            Console.WriteLine(completionStatus);
            string billDetails=ride.GenerateBill();
            Console.WriteLine(billDetails);
        }
    }
}
