using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RideAggregator;

namespace RideAggregator
{
    internal  class PrimePickUpDropRide : PickupDropRide
    {
        const double PrimeDiscountPercent = 12.0;

        public PrimePickUpDropRide(string pickupLocation, string dropLocation, DateTime startTime, DateTime endTime, Driver driver, Customer customer, int Kms) : base(pickupLocation, dropLocation, startTime, endTime, driver, customer,13)
        {

        }

    public override string GenerateBill()
        {
            return "From PrimePickUpDropRide Bill with Discount:";
        } 

    }
}
internal class CancellablePrimePickupDropRide : PrimePickUpDropRide //Multi level allowed
{

    public CancellablePrimePickupDropRide(string pickupLocation, string dropLocation, DateTime startTime, DateTime endTime, Driver driver, Customer customer, int Kms) : base(pickupLocation, dropLocation, startTime, endTime, driver, customer, 13)
    {

    }

    public override string GenerateBill()
    {
        return base.GenerateBill();
    }
}


   






