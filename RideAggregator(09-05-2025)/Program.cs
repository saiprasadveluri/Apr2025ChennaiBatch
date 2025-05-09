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
            Customer cus = new Customer("soumya", "Hyd", "8790010160");
            Driver drv = new Driver("driver1", "9959491824", 5);
            //string pickup = "Kphb";
            //string drop = "BHEL";
            Ride ride = new Ride(drv,cus,23);
            string startstatus = ride.startRide();
            Console.WriteLine(startstatus);
            string endStatus = ride.CompleteRide();
            Console.WriteLine(endStatus);
            string generateBill = ride.GenerateBill();
            Console.WriteLine(generateBill);

            //2nd object:PickDropRide
            PickupDropRide pick = new PickupDropRide("central","Kphb",
                DateTime.Now,DateTime.Now.AddMinutes(20),drv,cus,24);
            Console.WriteLine(pick.startRide());
            Console.WriteLine(pick.CompleteRide());
            Console.WriteLine(pick.GenerateBill());

            //3rd object: RentalRide
            RentalRide rentalRide = new RentalRide(3, 230, drv, cus, 120);
            Console.WriteLine(rentalRide.CompleteRide());
            Console.WriteLine(rentalRide.startRide());
            Console.WriteLine(rentalRide.GenerateBill());

            Ride[] ride1 = new Ride[4];
            PickupDropRide pickupDropRide1 = new PickupDropRide("loc1","dest1",
                DateTime.Now,DateTime.Now.AddMinutes(30), drv,cus,130);
            ride1[0] = pickupDropRide1;
            ride1[1] = new PickupDropRide("loc2", "dest2",
                DateTime.Now, DateTime.Now.AddMinutes(40), drv, cus, 140);
            ride1[2] = new Ride(drv, cus, 28);
            ride1[3] = new Ride(drv, cus, 29);

            foreach (Ride r in ride1)
            {
                Console.WriteLine(r.GenerateBill());
            }

            Console.WriteLine("enter sno of ride  to cancel");
            int nIndex=int.Parse(Console.ReadLine());
            Ride curRide = ride1[nIndex];
            Icancellable ridecancel = curRide as Icancellable;
            if(ridecancel != null )
            {
                bool res=ridecancel.CancelRide();
                if(res)
                {
                    Console.WriteLine("cancelled ride");
                }
                else
                {
                    Console.WriteLine("Cannot cancel the ride");
                }
            }

        }
    }
}
