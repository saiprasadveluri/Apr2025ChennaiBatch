using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal /*abstract*/ class PickupDropRide : Ride, ICancellable, ICouponApplied//Base Class is Ride.
    {
        const double ChargesPerKm = 17.5;//Class level const attribute.

        public string PickupLocation { get; }//Auto Implemented Props
        public string DropLocation { get; }
        public DateTime StartTime { get; }
        public DateTime EndTime { get; }

        public PickupDropRide(string pickupLocation, string dropLocation,
            DateTime startTime, DateTime endTime, Driver driver,
            Customer customer, int Kms) : base(driver, customer, Kms)
        {
            PickupLocation = pickupLocation;
            DropLocation = dropLocation;
            StartTime = startTime;
            EndTime = endTime;
        }

        public override string CompleteRide()
        {
            return " PickupDropRide Complete";
        }

        public override string GenerateBill()//poly
        {
            double TotalAmount = ChargesPerKm * TravelDist;
            return String.Format($"PickupDrop Ride Charges: {TotalAmount}");
        }

        public bool CancelRide()
        {
            return true;
        }

        public bool ApplyCoupon(string code)
        {
            return true;
        }

        //public sealed override string CancelRide()
        //{
        //    return "Cancel Ride";
        //}
    }
}