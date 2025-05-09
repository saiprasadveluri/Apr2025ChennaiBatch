using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal sealed class PrimePickupDropRide:PickupDropRide //multi level-allowed
    {
        const double PrimeDiscountPercent = 12.0;

        public PrimePickupDropRide(string pickupLocation, String dropLocation,
            DateTime startTime, DateTime endTime, Driver driver, Customer customer, int Kms) :
            base(pickupLocation, dropLocation, startTime, endTime, driver, customer, 13)
        {

        }
        public override string GenerateBill()
        {
            return "From PrimePickupDropRide Bill with Discount:";
        }
    }
   /* internal class  CancellablePrimePickupDropRide:PrimePickupDropRide //Multi level-allowed
    {
        public CancellablePrimePickupDropRide(string pickupLocation, String dropLocation,
            DateTime startTime, DateTime endTime, Driver driver, Customer customer, int Kms) :
             base(pickupLocation, dropLocation, startTime, endTime, driver, customer, 13)
        {
        }
        public override string GenerateBill()
        {
            return "Not allowed";
        }*/



    }

