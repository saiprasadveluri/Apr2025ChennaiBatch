using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to ManaUru Rapido");

         
            Console.Write("Enter Customer ID: ");
            int customerId = int.Parse(Console.ReadLine());
            Console.Write("Enter Customer Name: ");
            string customerName = Console.ReadLine();
            Console.WriteLine("Enter Customer PhoneNo.:");
            long customerPhone= long.Parse(Console.ReadLine());
            Console.WriteLine("Enter Customer Address: ");
            string customerAddress= Console.ReadLine();
            Customer customer = new Customer(customerId, customerName,customerPhone,customerAddress);

           
            Console.Write("Enter Driver ID: ");
            int driverId = int.Parse(Console.ReadLine());
            Console.Write("Enter Driver Name: ");
            string driverName = Console.ReadLine();
            Console.Write("Enter Driver LicenseNumber: ");
            long driverLicenseNumber =long.Parse( Console.ReadLine());
            Driver driver = new Driver(driverId, driverName,driverLicenseNumber);

      
            Console.Write("Enter Ride ID: ");
            int rideId = int.Parse(Console.ReadLine());
            Console.Write("Enter Pickuplocation: ");
            string pickuplocation= Console.ReadLine();
            Console.Write("Enter Droplocation: ");
            string droplocation= Console.ReadLine();
            Ride ride = new Ride(rideId, pickuplocation,droplocation,customer, driver);

            Console.ReadKey();
            ride.StartRide();


            Console.WriteLine("Ride is in progress...");

          
            Console.WriteLine("Press any key to complete the ride...");
            Console.ReadKey();
            ride.CompleteRide();

            Billing.GenerateBill(ride);

            Console.WriteLine("\nRide process completed! Thank you for using ManaUru Rapido.");
        }
    }
}
