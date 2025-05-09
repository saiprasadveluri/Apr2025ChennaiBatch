using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Ride
    {
        private int RideId { get; set; }
        private string PickupLocation { get; set; }
        private string DropLocation { get; set; }
        private int Distance { get; set; }
        private int Fare { get; set; }
        private string RideStatus { get; set; }
        private Customer RideCustomer { get; set; }
        private Driver RideDriver { get; set; }
        public Driver Driver { get; }
        public Customer Customer { get; }

        //Driver RideS = new Driver();
        //Customer Cust = new Customer();
        public void AddRide()
        {
            Console.WriteLine("Welcome to Ride Aggregator");
            Console.WriteLine("Enter Ride Id: ");
            RideId = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Pickup Location: ");
            PickupLocation = Console.ReadLine();
            Console.WriteLine("Enter Drop Location: ");
            DropLocation = Console.ReadLine();
            Console.WriteLine("Enter Distance: ");
            Distance = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine("Enter Fare: ");
            //Fare = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Ride Status: ");
            RideStatus = Console.ReadLine();
        }
        public string StartRide()
        {
            return string.Format($"Ride Started from: {PickupLocation}");
        }
        
        public string EndRide()
        {
            return string.Format($"Ride Ended at: {DropLocation}.\n Distance Covered: {Distance}");
        }
        public string generateFare()
        {
            string s = string.Empty;
            string driverdetails = GetDriverDetails();
            string customerdetails = GetCustomerDetails();
            return string.Format($"Bill Genertated...\n{driverdetails}\n{customerdetails}");
        }
        public string GetDriverDetails()
        {
            return RideDriver.ViewDriver();
        }
        public string GetCustomerDetails()
        {
            return RideCustomer.ViewCustomer();
        }
        public Ride(Customer rideCustomer, Driver rideDriver,int Distance)
        {
            RideCustomer = rideCustomer;
            RideDriver = rideDriver;
            this.Distance = Distance;
        }

        public class RideCollection : IEnumerable<Ride>
        {
            private List<Ride> rides = new List<Ride>();

            public IEnumerator<Ride> GetEnumerator()
            {
                return rides.GetEnumerator();
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }
        }

        //public Ride(Driver driver, Customer customer)
        //{
        //    Driver = driver;
        //    Customer = customer;
        //}

        //public void AddRide()
        //{
        //    Console.WriteLine("Welcome to Ride Aggregator");
        //    while (true)
        //    {
        //        if (a == null)
        //        {
        //            Console.WriteLine("Please add customer details first");
        //            break;
        //        }
        //        else if (string.IsNullOrEmpty(a.Name))
        //        { 

        //            Console.WriteLine("Enter Ride Id: ");
        //            RideId = Convert.ToInt32(Console.ReadLine());
        //            Console.WriteLine("Enter Pickup Location: ");
        //            PickupLocation = Console.ReadLine();
        //            Console.WriteLine("Enter Drop Location: ");
        //            DropLocation = Console.ReadLine();
        //            Console.WriteLine("Enter Distance: ");
        //            Distance = Convert.ToInt32(Console.ReadLine());
        //            Console.WriteLine("Enter Fare: ");
        //            Fare = Convert.ToInt32(Console.ReadLine());
        //            Console.WriteLine("Enter Ride Status: ");
        //            RideStatus = Console.ReadLine();
        //            break;
        //        }
        //    }
        //}
        //public void ViewRide()
        //{
        //    Console.WriteLine($"Ride Id: {RideId}\n Pickup Location: {PickupLocation}\n Drop Location: {DropLocation}\n Distance: {Distance}\n Fare: {Fare}\n Ride Status: {RideStatus}");
        //}
    }
}
