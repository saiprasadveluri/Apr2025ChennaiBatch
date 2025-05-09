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
            //Cretae a driver 
            Driver driver = new Driver("Shravs", "9695421324", 23, 4.7);
            Customer customer = new Customer("Chitti", "76545", "Miryalaguda");
            ////Create Ride
            ////string pickup = "Central";
            ////string drop = "DLF";
            //Ride ride = new Ride(driver, customer, 23);
            ////perfotm actions
            //string startStatus = ride.StartRide();
            //Console.WriteLine(startStatus);
            //string completionStatus = ride.CompleteRide();
            //Console.WriteLine(completionStatus);
            //string billDetails = ride.GenerateBill();
            //Console.WriteLine(billDetails);

            ////2nd Object: PickupDropRide
            //PickupDropRide PickupDropRide = new PickupDropRide("Central", "DLF", DateTime.Now, DateTime.Now.AddMinutes(20), driver, customer, 24);
            //Console.WriteLine(PickupDropRide.StartRide());
            //Console.WriteLine(PickupDropRide.CompleteRide());
            //Console.WriteLine(PickupDropRide.GenerateBill());


            ////3rd Object:RentalRide
            //RentalRide rentalRide = new RentalRide(3, 230, driver, customer, 120);
            //rentalRide.StartRide();
            //Console.WriteLine(rentalRide.CompleteRide());
            //// rentalRide TravelDist = 0;//not a valid operation
            //Console.WriteLine(rentalRide.GenerateBill());
            //manage 2 pickuprides and 2 rentalrides (4 Rides Total)
            Ride[] rides = new Ride[4];//Base class References
            //1st pickupRide
            PickupDropRide pur1 = new PickupDropRide("Location 1", "Dest 1",
                DateTime.Now, DateTime.Now.AddMinutes(30),
                driver, customer, 10);
            rides[0] = pur1;

            rides[1] = new PickupDropRide("Location 2", "Dest 2",
                DateTime.Now, DateTime.Now.AddMinutes(10),
                driver, customer, 5);

            rides[2] = new RentalRide(5, 100, driver, customer, 45);
            rides[3] = new RentalRide(4, 120, driver, customer, 60);

            //Print The bills of all rides 

            Console.WriteLine("Bills of Rides as Follows:");

            //Static Link: Method resolution will happen on reference data type
            //Dynamic Linl: Method resolution will happen on object type
            foreach (Ride r in rides)
            {
                Console.WriteLine(r.GenerateBill());
            }

            Console.WriteLine("Enter Sno of ride to cancel");
            int nIndex = int.Parse(Console.ReadLine());
            Ride cuRide = rides[nIndex];
            ICancellable rideCancel = cuRide as ICancellable;
            if (rideCancel != null)
            {
                bool res = rideCancel.CancelRide();
                if (res)
                {
                    Console.WriteLine("Cancelled the ride ");
                }
            }
            else
            {

                Console.WriteLine("can not cancel the ride");
            }
        }
    }
}

