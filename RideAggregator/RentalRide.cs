using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class RentalRide:Ride, IReschedule, ICouponApplied
    {
        const double ChargesPerKm = 17.5;
        const double DayCharges = 1500;

        public int HiredDays { get; set; }

        //public int TravelList { get; set; }
        public double TollFees { get; set; }

        public RentalRide(int hiredDays, double tollFees, Driver driver, Customer customer,int Kms): base(driver,customer,Kms)
          
        {
            HiredDays = hiredDays;
            TollFees = tollFees;
         }

       public override string GenerateBill()
        {
            double TotalAmount = ChargesPerKm * TravelDist;
            double RentalCharges = DayCharges * HiredDays;
            double TotalCharges = TotalAmount + RentalCharges + TollFees;
            return string.Format($"RentalRide charges: {TotalCharges}");


        }

        public bool RescheduleRide()
        {
            throw new NotImplementedException();
        }

        public bool ApplyCoupon(string code)
        {
            throw new NotImplementedException();
        }
    }
}
