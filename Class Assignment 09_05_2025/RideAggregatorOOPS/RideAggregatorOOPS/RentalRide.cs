using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal class RentalRide:Ride, IReschedule, ICouponApplied
    {
        const double ChargesPerKm = 17.5;//Class level const attribute.
        const double DayCharges = 1500;
        public int HiredDays { get; set; }
        //public int TravelDist { get; set; }
        public double TollFees { get; set; }
        public RentalRide(int hiredDays, double tollFees,Driver driver,Customer customer,int Kms):
            base(driver, customer, Kms)
        {
            HiredDays = hiredDays;
            TollFees = tollFees;
        }

        public override string GenerateBill()//Override in derived class.
        {
            double TotalAmountForTravel = ChargesPerKm * TravelDist;
            double RentalChargs = DayCharges * HiredDays;
            double TotalCharges = TotalAmountForTravel + RentalChargs+ TollFees;
            return String.Format($"Rental Ride Charges: {TotalCharges}");
        }
        public override string CompleteRide()
        {
            return "From Rental ride Complete";
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
