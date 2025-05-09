using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Pickup : Ride
    {
        const double FarePerKm = 10.0;
        public string PickupLocation { get; set; }
        public string DropLocation { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Distance { get; set; }
        //public int Fare { get;}

        public Pickup(string Pickup, string Drop, DateTime Sdate, DateTime Edate,Driver driver, Customer customer,int Distance) : base(customer, driver, Distance)
        {
            this.PickupLocation = Pickup;
            this.DropLocation = Drop;
            this.StartTime = Sdate;
            this.EndTime = Edate;
            this.Distance = Distance;
        }
        public double CalculateFare()
        {
            double fare = Distance * FarePerKm;
            return fare;
        }
        public virtual string CompleteRide()
        {
            EndTime = DateTime.Now;
            double fare = CalculateFare();
            return string.Format($"Ride Completed...\nPickup Location: {PickupLocation}\nDrop Location: {DropLocation}\nDrop Time: {EndTime}\nDistance: {Distance}km\n Fare: {fare}");

        }
    }
}
