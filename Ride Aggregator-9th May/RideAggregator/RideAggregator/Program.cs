using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RideAggregator;

namespace RideAggregator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Create a driver & Customer
            Driver driver = new Driver("Sai", "99887766", 23, 4.7);
            Customer customer = new Customer("Durga", "76545", "Hyderabad");
            //Create Ride

            //Ride ride= new Ride(driver, customer,23);//Can  create Object of an abstratc class.
            /*//Perform actions
            string startStatus= ride.StartRide();
            Console.WriteLine(startStatus);
            string completionStatus=ride.CompleteRide();
            Console.WriteLine(completionStatus);
            string billDetails=ride.GenerateBill();
            Console.WriteLine(billDetails);

            //2ND Object: PickupDropRide
            PickupDropRide pickupDropRide = new PickupDropRide("Central", "KPHB",
                DateTime.Now, DateTime.Now.AddMinutes(20),
                driver, customer, 24);
            Console.WriteLine(pickupDropRide.StartRide());//Function Avail is due to Inher
            Console.WriteLine(pickupDropRide.CompleteRide());
            Console.WriteLine(pickupDropRide.GenerateBill());

            //3Rd Object: RentalRide
            RentalRide rentalRide=new RentalRide(3,230,driver,customer,120);
            rentalRide.StartRide();
            Console.WriteLine(rentalRide.CompleteRide());
            //rentalRide.TravelDist = 0;//Not a valid Operation
            Console.WriteLine(rentalRide.GenerateBill());
            */

            //Manage 2 PickupRides and 2 RentalRides (4 Rides Total)

            Ride[] rides = new Ride[4];//Base class Refernces

            // 1st Pickupride
            PickupDropRide pur1 = new PickupDropRide("Location 1", "Dest 1",
                DateTime.Now, DateTime.Now.AddMinutes(30),
                driver, customer, 10);

            rides[0] = pur1;//Assinging to array.
            // 2nd Pickupride
            rides[1] = new PrimePickupDropRide("Location 2", "Dest 2",
                DateTime.Now, DateTime.Now.AddMinutes(10),
                driver, customer, 5);

            // 3rd Rental
            rides[2] = new RentalRide(5, 100, driver, customer, 45);

            // 4th Rental
            rides[3] = new RentalRide(4, 120, driver, customer, 60);

            //Print the Bills of all rides
            Console.WriteLine("Bills Of Rides as Follows:");

            //Static Link: Method resolution will happen On REFERNCE data type.
            //Dynamic Link: Method resolution will happen On Object type.
            foreach (Ride r in rides)
            {
                Console.WriteLine(r.GenerateBill());
            }

            Console.WriteLine("Enter Sno of ride to cancel");
            int nIndex = int.Parse(Console.ReadLine());
            Ride curRide = rides[nIndex];
            ICancellable rideCancel = curRide as ICancellable;
            if (rideCancel != null)
            {
                bool res = rideCancel.CancelRide();
                if (res)
                {
                    Console.WriteLine("Cancelled The ride");
                }
            }
            else
            {
                Console.WriteLine("Can not Cancell ride");
            }
        }
    }
}