using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class PickupDropRide:Ride,ICancellable, ICouponApplied//base class is Ride
    {

        const double ChargesPerKm = 17.5;

       public string PickupLocation { get; set; } //auto implemented props

        public string DropLocation { get; set; }
       public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        
        //public double KmsTraveled {  get; set; } //moved to the base
        //public double chargesPerkm { get; }

        //constructor

        public PickupDropRide(string pickupLocation,string dropLocation,
            DateTime startTime,DateTime endTime,Driver driver,
            Customer customer,int Kms):base(driver,customer,Kms)
        {

        }
        public new string CompleteRide()
        {
            return "Completing PickupDropride";
        }
        public override string GenerateBill() //poly
        {
            double TotalAmountForTravel = KmsTraveled * ChargesPerKm ;
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
        //public sealed override string CancelRide()
        //{
        //    return "Cancel Ride";
        //}
    }

    }

