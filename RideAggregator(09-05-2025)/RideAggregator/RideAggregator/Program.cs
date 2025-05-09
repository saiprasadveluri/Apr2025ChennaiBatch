using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace RideAggregator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Driver driver = new Driver("Kishore", "9989734627", 25, 4.6);
            Customer customer = new Customer("Sowmika", "9807654567", "Hyderabad");
            //Create Ride
            string pickup = "Nagole";
            string drop = "HitechCity";
            Ride ride = new Ride(driver, customer, 24);//pickup,drop
            //Perform actions
            /*string startStatus = ride.StartRide();
            Console.WriteLine(startStatus);
            string completionStatus = ride.CompleteRide();
            Console.WriteLine(completionStatus);
            string billDetails = ride.GenerateBill();
            Console.WriteLine(billDetails);

             PickupDropRide p1=new PickupDropRide("Location 1","Dest 1",DateTime.Now,DateTime.Now.AddMinutes(30),
                                                   driver,customer,25);
            Console.WriteLine(p1.StartRide());
            Console.WriteLine(p1.CompleteRide());
            RentalRide r1 = new RentalRide(4, 345, driver, customer, 120);
            r1.StartRide();
            Console.WriteLine(r1.CompleteRide());
            //r1.TravelDist = 0;
            Console.WriteLine(r1.GenerateBill());*/
            Ride[] rides= new Ride[4]; //Mange 2 PickupRides and 2 Rentalrides,,total=4 rides

            PickupDropRide pur1=new PickupDropRide("Location1","Dest 1",DateTime.Now,DateTime.Now.AddMinutes(30),
                                                    driver,customer,10);

            rides[0] = pur1;
            rides[1]=new PrimePickupDropRide("Location2", "Dest 2", DateTime.Now, DateTime.Now.AddMinutes(10),
                                             driver,customer,10);
            rides[2] = new RentalRide(5, 100, driver, customer, 45);
            rides[3] = new RentalRide(4, 150, driver, customer, 55);
            foreach (Ride r in rides)
            {
                Console.WriteLine(r.GenerateBill());
            }
            
            Console.WriteLine("Enter no of rides to cancel");
            int nIndex=int .Parse(Console.ReadLine());
     
            Ride curRide = rides[nIndex];
            ICancellable rideCancel=curRide as ICancellable;
            if (rideCancel != null) {
                bool res = rideCancel.CancelRide();
                if (res)
                {
                    Console.WriteLine("Cancelled the ride");
                }
            }
            else {
                Console.WriteLine("cannot cancel ride");

            }

        }
    }
}
