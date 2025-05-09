using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class RentalRide:Ride, IReschedule, ICouponApplied
    {
        const double ChargesPerKm = 17.5;
        const double DayCharges = 1500;
        public int HiredDays {  get; set; }
        public double TollFees {  get; set; }
        // public int TravelList {  get; set; }

        public RentalRide(int hiredDays, double tollFees, Driver driver, Customer customer, int Kms) : base(driver, customer,Kms)
        {
            HiredDays = hiredDays;
            TollFees = tollFees;
        }
        public override string GenerateBill()
        {
            double Totalamount = ChargesPerKm * TravelDist;
            double RentalCharges = DayCharges * HiredDays;
            double totalcharges=Totalamount + RentalCharges+TollFees;
            return string.Format($"rental ride charges:{RentalCharges}");
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
