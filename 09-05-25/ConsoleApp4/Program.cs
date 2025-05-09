using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class Program

    {
        public class Billing
        {
            public int BillingId { get; set; }
            public ride RideDetails { get; set; }
            public decimal TotalAmount { get; private set; }

            public void GenerateBill()
            {
                TotalAmount = RideDetails.Fare;
                Console.WriteLine($"Bill generated! Total amount: {TotalAmount}");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to the Ride Aggregator App!");

           
            customer customer = customer.CreateCustomer();
            driver driver = driver.CreateDriver();

           
            ride ride = new ride { RideId = new Random().Next(1000), RideCustomer = customer, RideDriver = driver };
            Console.WriteLine("\nPress ENTER to start the ride.");
            Console.ReadLine();
            ride.StartRide();

            Console.WriteLine("\nPress ENTER to complete the ride.");
            Console.ReadLine();
            ride.CompleteRide();

            
            Billing bill = new Billing { BillingId = new Random().Next(1000), RideDetails = ride };
            bill.GenerateBill();
                                
        }
    }
}
