using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class RentalRide : Ride, IReschedule, ICouponApplied
    {
        const double ChargePerKm = 17.5;
        const double DayCharges = 150;
        public int HireDays { get; set; }
        public double TollFees { get; set; }

        public RentalRide(int hireDays, double tollFees, Driver driver, Customer customer, double kms) : base(driver, customer, kms)
        {
            HireDays = hireDays;
            TollFees = tollFees;
        }
        public new string GenerateBill()
        {
            double TotalAmountForTravel = KmTravelled * ChargePerKm;
            double RentalCharges = DayCharges * HireDays;
            double TotalCharges = TotalAmountForTravel + RentalCharges + TollFees;
            return string.Format($"Rental Ride Charges:{TotalCharges}");
        }
        public bool Reschedule()
        {
            return true;
        }

        public bool ApplyCoupon(string code)
        {
        return true;
        }
    }
}
