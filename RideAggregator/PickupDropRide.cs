using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class PickupDropRide:Ride, ICancellable, IReschedule, ICouponApplied//Base class is ride
    {
        const double ChargesPerKm = 17.5;//Class level const attributes
        public string PickupLocation { get; set; }

         public string   DropLocation { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        //public double KmTravelled { get; set; }
       // public double ChargesPerKm { get; }//Getter only property

        //Constructor 
        public PickupDropRide(string pickupLocation ,string dropLocation, DateTime startTime,DateTime endTime,Driver driver, Customer customer,int Kms) :base(driver,customer,10) 
        {
        
        }
        public new string CompleteRide()
        {
            return "Completing PickUpDropRide";
        }

        public override string GenerateBill()//poly
        {
            double TotalAmount = KmTravelled * ChargesPerKm;
            return string.Format($"PickupDropRide charges: {TotalAmount}");


        }

        public bool CancelRide()
        {
            return true;
        }

        public bool RescheduleRide()
        {
            return true;
        }

        public bool ApplyCoupon(string code)
        {
            return true;
        }
    }
}
