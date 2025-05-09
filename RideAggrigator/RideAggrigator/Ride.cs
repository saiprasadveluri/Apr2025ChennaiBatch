
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal abstract class Ride
    {
        private Customer RideCustomer { get; set; }//'Has a' Relation
        private Driver RideDriver { get; set; }//'Has a' relations
        protected int TravelDist { get; set; }//Accessable from Derived class NOT from Main

        public string StartRide()
        {
            return string.Format($"Ride Started...");
        }
        public abstract string CompleteRide();//Abstract Method.
        /*{
            return string.Format($"Ride Ended");
        }*/
        public abstract string GenerateBill();//Abstract Method
        /*{
            String strOut = String.Empty;
            string driverDetails = GetDriverDetails();//Delegation Model
            string customerDetails = GetCusomerDetails();  //Delegation Model         
            return String.Format($"Bill Genrated...From RIDE: {driverDetails}....{customerDetails}");
        }*/
        //Private Functions
        private string GetDriverDetails()
        {
            return RideDriver.GetDriverInfo();//Delegation Model
        }

        private string GetCusomerDetails()
        {
            return RideCustomer.GetCustomerInfo();//Delegation Model
        }
        //Constructor
        public Ride(Driver driver, Customer customer, int kmsTraveled)//,string pickup,string drop)
        {
            RideDriver = driver;
            RideCustomer = customer;
            TravelDist = kmsTraveled;
        }

        //public virtual string CancelRide()
        //{
        //    return "Cancel Ride";
        //}
    }
}
