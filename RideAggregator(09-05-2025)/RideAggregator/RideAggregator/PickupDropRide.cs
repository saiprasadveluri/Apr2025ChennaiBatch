using System;
using System.Collections.Generic;
using System.Diagnostics.SymbolStore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class PickupDropRide : Ride,ICancellable, ICouponApplied  //here base class is ride
    {
        const double chargesPerKm = 17.5;  //class level Attribute
        public string pickupLocation { get; }
        public string dropLocation { get; }
        public DateTime startTime { get; }
        public DateTime endTime { get; }
        //public double kmTravelled { get; }
        // public double chargesPerKm { get; }
        //--
        public PickupDropRide(string pickupLocation, string dropLocation, DateTime startTime, DateTime endTime,
            Driver driver, Customer customer,int kms) : base(driver, customer, kms)
        {

        }
        public new string CompleteRide()
        {
            return "completing PickupDropride";
        }
        public override string GenerateBill()
        {
            double TotalAmountForTravel =KmsTravelled * chargesPerKm;
            return string.Format($"PickupDrop Ride Charges:{TotalAmountForTravel}");
        }
        public bool CancelRide()
        {
            return true; 

        }
        public bool ApplyCoupon(string code)
        {
            return true;
        }

    }

}
