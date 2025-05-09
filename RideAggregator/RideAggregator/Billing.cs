using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Billing
    {
        private const int RatePerMinute = 10;

        public static int CalculateFare(Ride ride)
        {
            if (!ride.IsCompleted) return 0;
            TimeSpan duration = ride.EndTime - ride.StartTime;
            int fare = (int)duration.TotalMinutes * RatePerMinute;
            return fare;
        }

        public static void GenerateBill(Ride ride)
        {
            int fare = CalculateFare(ride);
            Console.WriteLine($"Bill for Ride {ride.RideId}: Rs. {fare}");

        }
    }
}
