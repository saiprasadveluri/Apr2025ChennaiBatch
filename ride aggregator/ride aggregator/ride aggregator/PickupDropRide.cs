using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class PickupDropRide:Ride,ICancellable, ICouponApplied //inherits ride as base class(:) by using colon it is the syntax for inheritance
    {
        const double ChargesPerKm = 17.5; //class level const attribute
        public string PickupLocation { get; set; } //auto impl prop
        public string DropLocation { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
      
 
       // public double KmTravelled {  get; set; } //moved to base class
        //public double ChargesPerKm {  get;} //getter only prop

        //constructor
        public PickupDropRide(string pickuplocation,string droplocation,DateTime starttime,DateTime endtime,Driver driver,Customer customer,int Kms):base(driver,customer,Kms)
        {
            PickupLocation = pickuplocation;
            DropLocation = droplocation;
            StartTime = starttime;
            EndTime = endtime;
          


        }
        public new string CompleteRide()
        {
            return "completing pickupdropride";
        
        }
        public override string GenerateBill()
        {
            double Totalamount = KmTravelled *ChargesPerKm;
   
            return string.Format($"pickupdropride charges:{Totalamount}");
        }

        public bool CancelRide()
        {
            return true;
        }

        public bool ApplyCoupon(string code)
        {
            return true;
        }
    }
}
