using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class RentalRide:ride
    {
        const double FarePerKm = 10.0;
        const double DayCharges = 1000;
        public int hireDays { get; set; }
        public int TravelDist { get; set; }
        public double TollFees { get; set; }

        public RentelRide(int hireDays, double TollFees, driver driver, customer customer, int kms) : base(customer, driver, kms)
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
