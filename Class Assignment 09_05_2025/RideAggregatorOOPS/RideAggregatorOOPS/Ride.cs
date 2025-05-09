using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal class Ride
    {
        private Customer RideCustomer {  get; set; }//'Has a' Relation
        private Driver RideDriver { get; set; }//'Has a' relations
        //Other Props
        public string PickupLocation {  get; set; }
        public string DropLocation {  get; set; }
        public string StartRide()
        {
            return string.Format($"Ride Started from {PickupLocation}");
        }
        public string CompleteRide()
        {
            return string.Format($"Ride Ended at {DropLocation}");
        }
        public string GenerateBill()
        {
            String strOut = String.Empty;
            string driverDetails = GetDriverDetails();//Delegation Model
            string customerDetails = GetCusomerDetails();  //Delegation Model         
            return String.Format($"Bill Genrated...{driverDetails}....{customerDetails}");
        }
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
        public Ride(Driver driver,Customer customer,string pickup,string drop)
        {
            RideDriver = driver;
            RideCustomer = customer;
            PickupLocation = pickup;
            DropLocation = drop;
        }
    }
}
