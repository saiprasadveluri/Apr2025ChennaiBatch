using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ride_Aggregator
{
    internal sealed class PrimePickUpDrop : PickUpDrop
    {
        const double PrimeDiscountPercent = 12.0;
        public PrimePickUpDrop(string pickupLocation, string dropLocation,
            DateTime startTime, DateTime endTime, Driver driver,
            Customer customer, int Kms) : base(pickupLocation, dropLocation,
                startTime, endTime, driver, customer, 13)
        {

        }

        public override string CompleteRide()
        {
            return "From Prime Comple ride";
        }
        public override string GenerateBill()
        {
            return "From PrimePickupDropRide Bill with Discount:";
        }
    }

    /*internal class CancellablePrimePickupDropRide : PrimePickupDropRide//Multi Level-Allowed
    {
        public CancellablePrimePickupDropRide(string pickupLocation, string dropLocation,
            DateTime startTime, DateTime endTime, Driver driver,
            Customer customer, int Kms):base(pickupLocation, dropLocation,
                startTime, endTime, driver, customer, 13)
        {

        }
        public override string GenerateBill()
        {
            return "Not allowed";
        }
    }*/
}

