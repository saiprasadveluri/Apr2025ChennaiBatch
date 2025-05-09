using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class RentalRide:Ride, IReschedule, ICouponApplied
    {
        const double chargesPerKm = 17.5;
        const double dayCharges = 1500;
        public int HiredDays { get; set; }
        public double TollFees { get; set; }

        public RentalRide(int hiredDays,double tollFees,Driver driver,Customer customer,int kms):
            base(driver, customer, kms)
        {
            HiredDays = hiredDays;
            TollFees = tollFees;

        }
        public override string GenerateBill()//Override in derived class.
        {
            double TotalAmountForTravel = chargesPerKm * TravelDist;
            double RentalChargs = dayCharges * HiredDays;
            double TotalCharges = TotalAmountForTravel + RentalChargs + TollFees;
            return String.Format($"Rental Ride Charges: {TotalCharges}");
        }
        public bool ReschedukeRide()
        {
            return true;
        }
        public bool ApplyCoupon(string code)
        {
            return true;
        }


    }
}