
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal class driver
    {
        //Auto Implemented Properties
        public string DriverName { get; private set; }
        public string DriverContact { get; private set; }
        public int NumberOfRides { get; private set; }
        public double AvegareRating { get; private set; }
        //Constructor
        public driver(string name, string contact, int ridecount, double rating)
        {
            driverName = name;
            driverContact = contact;
            NumberOfRides = ridecount;
            AvegareRating = rating;
        }
        public string GetDriverInfo()
        {
            return string.Format($"Driver Name: {DriverName}, has contact: {DriverContact} completed : {NumberOfRides} having rating of :{AvegareRating}");
        }


    }
}
