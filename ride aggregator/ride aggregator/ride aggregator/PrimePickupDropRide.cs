using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class PrimePickupDropRide:PickupDropRide
    {
        const double PrimeDiscountPercenr = 12.0;
        public PrimePickupDropRide(string pickuplocation, string droplocation, DateTime starttime, DateTime endtime, Driver driver, Customer customer, int Kms):base(pickuplocation,droplocation,starttime,endtime,driver,customer,13) 
        {

        }
        public override string GenerateBill()
        {
            return "from Primepickupdropride bill with discount";
        }
    }
    internal class CancellablePrimePickupDropRide:PrimePickupDropRide
    {
        public CancellablePrimePickupDropRide(string pickuplocation, string droplocation, DateTime starttime, DateTime endtime, Driver driver, Customer customer, int Kms) : base(pickuplocation, droplocation, starttime, endtime, driver, customer, 13)
        { 
        }
        public override string GenerateBill()
        {
            return "not allowed";
        }
    }
}
