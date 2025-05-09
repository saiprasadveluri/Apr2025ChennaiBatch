using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class Ride
    {
        private Customer RideCustomer { get; set; }  //'has a' relation
        private Driver RideDriver { get; set; }      //'has a' relation
       
        protected int TravelDist {  get; set; } //access from derived classes not from main
        public double KmTravelled { get; set; }

        //public string PickupLocation {  get; set; }
        //public string DropLocation {  get; set; }
        public string StartRide()
        {
            return string.Format($"Ride started");
        }
        public string CompleteRide()
        {
            return string.Format($"Ride ended");
        }
        public virtual string GenerateBill()
        {
            string strOut=string.Empty;
            string driverdetails = ShowDriverDetails();
            string customerdetails = ShowCustomerDetails();
            return string.Format($"bill generated...{driverdetails}....{customerdetails}");
        }

        //private function

        private string ShowDriverDetails()
        {
            return RideDriver.ShowDriverDetails();  //delegation model
        }
        private string ShowCustomerDetails()
        {
            return RideCustomer.ShowCustomerDetails();
        }

        public Ride(Driver driver, Customer customer,int kmstraveled) //string pickup, string dropup)
        {
            RideDriver = driver;
            RideCustomer = customer;
            KmTravelled = kmstraveled;
       
            //PickupLocation = pickup;
            //DropLocation = dropup;
        }




    }
}
