using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal sealed class PrimePickupDropRide:PickupDropRide
    {
        const double PrimeDiscountPercent = 12.0;
        public PrimePickupDropRide(string PickupLocation, string DropLocation, DateTime StartTime, DateTime EndTime, Driver driver,
            Customer customer, double Kms) : base(PickupLocation, DropLocation, StartTime, EndTime, driver, customer, 13)
        {
        }
        public override string GenerateBill()
        {
            return "From PrimePickupDropRide Bill with Discount:";
        }
    }
}
