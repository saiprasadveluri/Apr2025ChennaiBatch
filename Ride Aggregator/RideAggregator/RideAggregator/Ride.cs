using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Ride
    {
        private Customer RideCustomer {  get; set; }  //has a' relation
        private Driver RideDriver { get; set; }  //has a' relation

        public double KmsTraveled {  get; set; }

        protected int TravelDist { get; set; } //acess  from derived 
        //other props
        //public string PickupLocation {  get; set; }

        //public string DropLocation { get; set; }
        public string StartRide()
        {
            return string.Format($"Ride Started ");
        }
        public virtual string CompleteRide()
        {
            return string.Format($"Ride Ended");
        }
        public virtual string GenerateBill()  //virtual method
        {
            string strOut=string.Empty;
            string driverDetails=GetDriverDetails();   //delegation string
            string customerDetails = GetCustomerDetails();
            return string.Format($"Bill generated....{driverDetails}.....{customerDetails}");
        }
        //private Functions
        private string GetDriverDetails()
        {
            return RideDriver.GetDriverInfo();
        }
        private string GetCustomerDetails()
        {
            return RideCustomer.GetCustomerInfo();  //delegation model
        }
        //constructor
        public Ride(Driver driver,  Customer customer,int kmsTraveled)//string pickup,string drop)
        {
            RideDriver = driver;
            RideCustomer = customer;
            KmsTraveled = kmsTraveled;

            //PickupLocation = pickup;
           // DropLocation = drop;
        }
        //public virtual string CancelRide()
        //{
        //    return "Cancel Ride";
        //}
    }
}
