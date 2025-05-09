using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class PrimePickUp
    {
        const double PrimeDiscount = 12;
        public PrimePickUp(string Pickup, string Drop, DateTime Sdate, DateTime Edate, driver driver, customer customer, int Distance) : base(Pickup, Drop, Sdate, Edate, driver, customer, Distance)
        {
            this.PickupLocation = Pickup;
            this.DropLocation = Drop;
            this.StartTime = Sdate;
            this.EndTime = Edate;
            this.Distance = Distance;
        }
        public override string CompleteRide()
        {
            return "Bill";
        }
    }
}
