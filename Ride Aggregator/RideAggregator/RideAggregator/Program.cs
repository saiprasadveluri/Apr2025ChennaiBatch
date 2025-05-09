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
            //create a driver & customer
            Driver driver=new Driver("chandu", "9876543210",24,4.7);
            Customer customer = new Customer("sai", "123456", "Hyderabad");
            //create ride
            string pickup = "central";
            string drop = "Nizampet";
            //1st object:Ride

           /* Ride ride = new Ride(driver, customer, 24);//pickup, drop);
            //perform actions
            string startStatus = ride.StartRide();
            Console.WriteLine(startStatus);
            string completionStatus = ride.CompleteRide();
            Console.WriteLine(completionStatus);
            string billDetails = ride.GenerateBill();
            Console.WriteLine(billDetails);

            //2ND Object:PickupDropRide
            PickupDropRide pickupDropRide = new PickupDropRide("Central", "Nizampet", 
                DateTime.Now, DateTime.Now.AddMinutes(20), driver, customer, 24);

            Console.WriteLine(pickupDropRide.StartRide());  //Functional Avail is due to Inher
            Console.WriteLine(pickupDropRide.CompleteRide());

            RentalRide rentalRide=new RentalRide(3,230,driver, customer, 120);
            rentalRide.StartRide();
            Console.WriteLine(rentalRide.CompleteRide());*/


           // rentalRide.TravelDist = 0; ///not a valid operation

           // Console.WriteLine(rentalRide.GenerateBill());

            //Manage 2 PickupRides and 2 RentalRides (4 Rides Total)

            Ride[] rides = new Ride[4]; //  base clas Reference

            //1st Pickupride
            PickupDropRide pur1 = new PickupDropRide("Location1", "Dest 1",
                DateTime.Now, DateTime.Now.AddMinutes(30), driver, customer, 10);
            rides[0] = pur1; //assing to array.

            rides[1] = new PrimePickupDropRide("Location2", "Dest 2",
                DateTime.Now, DateTime.Now.AddMinutes(10), driver, customer, 5);

            rides[2] = new RentalRide(5,100,driver, customer, 45);
            rides[3] = new RentalRide(4, 120, driver, customer, 60);

            //Print the bills of all rides
            Console.WriteLine("Bills of Rides as Follows:");

            //static link:Method resolution will hapeen On Reference data type
            //dynamic link:Method resolution will hapeen On object data type
            foreach (Ride r in rides)
            {
                Console.WriteLine(r.GenerateBill());
            }
            Console.WriteLine("Enter sno of ride to cancel");
            int nIndex=int.Parse(Console.ReadLine());
            Ride curRide= rides[nIndex];
            ICancellable rideCancel=curRide as ICancellable;
            if(rideCancel != null)
            {
                bool res=rideCancel.CancelRide();
                if(res)
                {
                    Console.WriteLine("Cancelled the ride");

                }

            }
            else
            {
                Console.WriteLine("can not cancell ride");
            }

        }
    }
}
