using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Ride
    {
        private Customer RideCustomer { get; set; }//'Has a' Relation
        private Driver RideDriver { get; set; }//'Has a' relations
        //Other Props
        public double KmsTravelled { get; set; }
        protected int TravelDist { get; set; }
        public string StartRide()
        {
            return string.Format($"Ride Started");
        }
        public virtual string CompleteRide()
        {
            return string.Format($"Ride Ended");
        }
        public virtual string GenerateBill()
        {
            String strOut = String.Empty;
            string driverDetails = GetDriverDetails();//Delegation Model
            string customerDetails = GetCustomerDetails();  //Delegation Model         
            return String.Format($"Bill Genrated...{driverDetails}....{customerDetails}");
        }
        //Private Functions
        private string GetDriverDetails()
        {
            return RideDriver.GetDriverInfo();//Delegation Model
        }

        private string GetCustomerDetails()
        {
            return RideCustomer.GetCustomerInfo();//Delegation Model
        }
        //Constructor
        public Ride(Driver driver, Customer customer,int kmstravelled)//string pickup, string drop)
        {
            RideDriver = driver;
            RideCustomer = customer;
            KmsTravelled= kmstravelled;

            //PickupLocation = pickup;
            //DropLocation = drop;
        }


    }
}
