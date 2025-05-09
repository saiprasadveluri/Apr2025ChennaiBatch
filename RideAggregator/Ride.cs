using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Ride
    {
        private Customer RideCustomer {  get; set; }

        private Driver RideDriver { get; set; }

        public double KmTravelled {  get; set; }

        public int TravelDist { get; set; }


        //public string PickupLocation { get; set; }

       // public string   DropLocation { get; set; }

        public string StartRide()
        {
            return string.Format($"Ride Started");

        }
        public  virtual string CompleteRide()
         {
            return string.Format($"Ride Ended ");

        }

        public  virtual string GenerateBill()
        {
            String strOut = String.Empty;
            string driverDetails = GetDriverDetails();//Delegation Model
            string customerDetails = GetCustomerDetails();  //Delegation Model         
            return String.Format($"Bill Genrated...{driverDetails}....{customerDetails}");
        }
        private string GetDriverDetails()
        {
            return RideDriver.GetDriverInfo();//Delegation Model
        }

        private string GetCustomerDetails()
        {
            return RideCustomer.GetCustomerDetails();//Delegation Model
        }
        //Constructor 
        public Ride(Driver driver, Customer customer, int KmsTravelled)
        {
            RideCustomer = customer;
            RideDriver = driver;
            KmTravelled = KmsTravelled;

            //pickupLocation = pickupLocation;
            //DropLocation = dropLocation;
        }

    }
}
