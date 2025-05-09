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

        //public string PickupLocation { get; set; }

        //public string DropLocation { get; set; }
        public double KmTravelled { get; set; }

        public string startRide()
        {
            return string.Format($"Ride start From");
        }
        public string CompleteRide()
        {
            return string.Format($"Ride Ended Here");
        }
        public virtual string GenerateBill()
        {
            string strOut = string.Empty;
            string driverdetails = GetDriverDetails();
            string CustDetails = GetDriverDetails();
            return string.Format($"generated bill...{CustDetails}-{driverdetails}");
        }
        public string GetCustomerDetails()
        {
            return RideCustomer.GetCustDetails();
        }
        public string GetDriverDetails()
        {
            return RideDriver.GetDriveDetails();
        }
        public Ride(Driver driver,Customer customer, double Kms)//string pickup,string drop)
        {
            RideCustomer = customer;
            RideDriver = driver;
            KmTravelled = Kms;
           // PickupLocation = pickup;
            //DropLocation = drop;
        }

    }
}
