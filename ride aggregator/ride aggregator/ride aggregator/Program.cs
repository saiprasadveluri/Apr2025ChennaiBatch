using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //create adriver
            Driver driver=new Driver("mani","97345863",23,4.8);
            Customer customer=new Customer("manu","325378","Hyderabad");

            //generate ride
            //string pickup = "dlf";
            //string drop = "kphb";

           // Ride ride = new Ride(driver, customer,23);
           // //perform actions
           // string startstatus=ride.StartRide();
           // Console.WriteLine(startstatus);
           // string completionstatus=ride.CompleteRide();
           // Console.WriteLine(completionstatus);
           // string billdetails=ride.GenerateBill();
           // Console.WriteLine(billdetails);

           // //2ND OBJ :Pickupdropride
           // PickupDropRide pickupdropride=new PickupDropRide("central","dlf",DateTime.Now,DateTime.Now.AddMinutes(20),driver,customer,24);
           // Console.WriteLine(pickupdropride.StartRide());  //function avail is due to inher
           // Console.WriteLine(pickupdropride.CompleteRide());
           // Console.WriteLine(pickupdropride.GenerateBill());


           // RentalRide rentalride=new RentalRide(3,230,driver,customer,120);
           //Console.WriteLine( rentalride.StartRide());
           // Console.WriteLine(rentalride.CompleteRide());
           //// rentalride.TravelDist = 0;  //not a valid operation
           // Console.WriteLine(rentalride.GenerateBill());


            //manage 2 pickuprides and 2 rentalrides (4 rides total)

            Ride[] rides = new Ride[4];

            //1st pickup ride
            PickupDropRide pur1 = new PickupDropRide("Location 1", "Dest1", DateTime.Now, DateTime.Now.AddMinutes(30), driver, customer, 10);
            rides[0] = pur1; //assigning to array

            rides[1] = new PrimePickupDropRide("Location 2", "Dest2", DateTime.Now, DateTime.Now.AddMinutes(10), driver, customer,5);

            rides[2] = new RentalRide(5, 100, driver, customer, 45);
            rides[3] = new RentalRide(4, 120, driver, customer, 60);

            //print bills if all rides
            Console.WriteLine("bills of rides as follows");
            //static link:method resolution will happen on reference data type
            //dynamic link:method resolution will happen on object data type
            foreach (Ride r in rides)
            {
                Console.WriteLine(r.GenerateBill());
            }
            Console.WriteLine("enter Sno of ride to cancel");
            int nIndex=int.Parse(Console.ReadLine());
            Ride curRide=rides[nIndex];
            ICancellable rideCancel=curRide as ICancellable;
            if (rideCancel != null)
            {
                bool res = rideCancel.CancelRide();
                if (res)
                {
                    Console.WriteLine("cancelled the ride");
                }

            }
            else
            {
                Console.WriteLine("cannot cancelled");
            }

        }
    }
}
