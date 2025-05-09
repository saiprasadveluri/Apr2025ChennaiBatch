using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static RideAggregator.Ride;

namespace RideAggregator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Welcome to Ride Aggregator");
            //Console.WriteLine("1. Add Driver");
            //Console.WriteLine("2. View Driver");
            //Console.WriteLine("3. Add Customer");
            //Console.WriteLine("4. View Customer");
            //Console.WriteLine("10. Add Ride");
            //Console.WriteLine("5. Strat Ride");
            //Console.WriteLine("6. End Ride");
            //Console.WriteLine("7. Exit");
            //Console.WriteLine("Enter your choice: ");
            //int choice = Convert.ToInt32(Console.ReadLine());
            List<Ride> rideList = new List<Ride>();
            foreach (var ride in rideList)
            {
                Console.WriteLine(ride.StartRide());
            }
            Customer y = new Customer("Sona",9067891232,"Lane1");
            Driver x = new Driver("S", 9067891232,"eng",5,100);
            Ride z = new Ride(y,x,100);

            RideCollection rides = new RideCollection();
            foreach (var ride in rides)
            {
                Console.WriteLine(ride.StartRide());
            }

            Ride myRide = new Ride(new Customer("Adnan", 9067091232, "Lane2"), new Driver("Sss", 9067891232, "Telugu", 5, 10), 10);
            Console.WriteLine(myRide.generateFare());

            //Console.WriteLine(z.generateFare());

            Pickup p = new Pickup("Centerl","OMR",DateTime.Now,DateTime.Now.AddMinutes(20),x, y,25);
            Console.WriteLine(p.CompleteRide());
            //Console.WriteLine(p.StartRide());

            PrimePickUp pp = new PrimePickUp("Centerl", "OMR", DateTime.Now, DateTime.Now.AddMinutes(20), x, y, 25);
            //Console.WriteLine(pp.CompleteRide());
            RentelRide r = new RentelRide(1,100,x, y,100);
            //Console.WriteLine(r.GenerateBillR());
            //switch (choice)
            //{
            //    case 1:
            //        x.AddDriver();
            //        break;
            //    case 2:
            //        x.ViewDriver();
            //        break;
            //    case 3:
            //        y.AddCustomer();
            //        break;
            //    case 4:
            //        y.ViewCustomer();
            //        break;
            //    case 10:
            //        z.AddRide();
            //        break;
            //    case 5:
            //        z.StartRide();
            //        break;
            //    case 6:
            //        z.EndRide();
            //        z.generateFare();
            //        break;
            //    case 7:
            //        Environment.Exit(0);
            //        break;
            //    default:
            //        Console.WriteLine("Invalid choice");
            //        break;
            //}
        }
    }
}
