using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class PickupDropRide:Ride, Icancellable
    {
        const double ChargesPerKm = 17.5;
        public string PickupLocation { get; set; }

        public string DropLocation { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }
        
        //public double KmTravelled { get; set; } //Moved to Base Class

        //public double ChargesPerKm {  get; } //Moved to Base Class

        //constructor
        public PickupDropRide(string PickupLocation,string DropLocation,
            DateTime StartTime, DateTime EndTime, Driver driver, Customer customer, double Kms):base(driver,customer, Kms)
        {

        }
        public new string CompleteRide()
        {
            return "Completing PickupDropRide";
        }
       public override string GenerateBill()
        {
            double TotalAmount = KmTravelled * ChargesPerKm;
            return string.Format($"PickupDrop Ride Charges: {TotalAmount}");
        }
        public bool CancelRide()
        {
            return true;
        }

    }
}
