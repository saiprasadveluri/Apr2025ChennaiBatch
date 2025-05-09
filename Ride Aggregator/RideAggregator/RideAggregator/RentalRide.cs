using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class RentalRide : Ride, IReschedule, ICouponApplied
    {
        const double ChargesPerKm = 17.5;  //class level const attribute.
        const double DayCharges = 1500;
        public int HireDays { get; set; }

        //public int TravelList{get;set;}
        public double TollFees { get; set; }

        public RentalRide(int hireDays, double tollFees, Driver driver, Customer customer, int Kms) :
            base(driver, customer, Kms)
        {
            HireDays = hireDays;
            TollFees = tollFees;
        }
        public override string GenerateBill()
        {
            double TotalAmountForTravel = ChargesPerKm * TravelDist;
            double RentalCharges = DayCharges * HireDays;
            double TotalCharges = TotalAmountForTravel + RentalCharges + TollFees;
            return string.Format($"Rental Ride Charges:{RentalCharges}");
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
