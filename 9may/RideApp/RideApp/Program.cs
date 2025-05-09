using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;





namespace RideApp
{
    internal class Program
    {
        static List<Ride> rides = new List<Ride>();
        static int rideCounter = 1;
        static void Main(string[] args)
        {
            bool exit = false;
            while (exit) {
                Console.WriteLine("Ride Aggregator");
                Console.WriteLine("1. Create Ride");
                Console.WriteLine("2. Start Ride");
                Console.WriteLine("3. Complete Rides");
                Console.WriteLine("4. View All Rides");
                Console.WriteLine("5. Exit");
                Console.Write("");
                int ch = Convert.ToInt32(Console.ReadLine());

                switch (ch)
                {
                    case 1: CreateRide(); break;
                    case 2: StartRide(); break;
                    case 3: CompleteRide(); break;
                    case 4: ViewRides(); break;
                    case 5: exit = true; break;
                    default: Console.WriteLine("Invalid."); break;
                }

            }
        }
        static void CreateRide()
        {
            Ride r = new Ride();
            r.RideId = rideCounter++;

            Console.WriteLine("Enter Customer Details:");
            r.Customer = new Customer();
            Console.Write("Customer ID: "); r.Customer.Id = Convert.ToInt32(Console.ReadLine());
            Console.Write("Customer Name: "); r.Customer.Name = Console.ReadLine();
            Console.Write("Mobile: "); r.Customer.Mobile = Console.ReadLine();

            Console.WriteLine("Enter Driver Details:");
            r.Driver = new Driver();
            Console.Write("Driver ID: "); r.Driver.Id = Convert.ToInt32(Console.ReadLine());
            Console.Write("Driver Name: "); r.Driver.Name = Console.ReadLine();
            Console.Write("Vehicle No: "); r.Driver.VehicleNumber = Console.ReadLine();

            Console.Write("Enter Distance (km): ");
            r.Distance = Convert.ToDouble(Console.ReadLine());

            rides.Add(r);
            Console.WriteLine("Ride created successfully.");
        }

        static void StartRide()
        {
            Console.Write("Enter Ride ID to start: ");
            int id = Convert.ToInt32(Console.ReadLine());
            var ride = rides.Find(r => r.RideId == id);
            if (ride != null && ride.Status == "Created")
            {
                ride.Status = "Started";
                Console.WriteLine("Ride started.");
            }
            else Console.WriteLine("Invalid Ride or already started.");
        }

        static void CompleteRide()
        {
            Console.Write("Enter Ride ID to complete: ");
            int id = Convert.ToInt32(Console.ReadLine());
            var ride = rides.Find(r => r.RideId == id);
            if (ride != null && ride.Status == "Started")
            {
                ride.Status = "Completed";
                ride.GenerateBill();
                Console.WriteLine($"Ride completed. Bill: ₹{ride.BillAmount}");
            }
            else Console.WriteLine("Ride not started or already completed.");
        }

        static void ViewRides()
        {
            Console.WriteLine("\n--- All Rides ---");
            foreach (var r in rides)
            {
                Console.WriteLine($"RideID: {r.RideId}, Customer: {r.Customer.Name}, Driver: {r.Driver.Name}, Distance: {r.Distance}km, Status: {r.Status}, Bill: ₹{r.BillAmount}");
            }
        }
    }

}
