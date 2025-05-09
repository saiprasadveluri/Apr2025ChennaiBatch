using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class RentelRide:Ride
    {
        const double FarePerKm = 10.0;
        const double DayCharges = 1000;
        public int hireDays { get; set; }
        public int TravelDist { get; set; }
        public double TollFees { get; set; }
        
        public RentelRide(int hireDays,double TollFees, Driver driver,Customer customer,int kms):base(customer, driver,kms)
        {
            this.hireDays = hireDays;
            this.TollFees = TollFees;
            this.TravelDist = kms;
        }
        public string GenerateBillR()
        {
            double fare = (hireDays * DayCharges) + (TravelDist * FarePerKm) + TollFees;
            return string.Format($"Rentel Ride Fare for days {hireDays}: {fare}");
        }



    }
}
