using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal class Driver { 
    
       //auto implemented properties

        public string DriverName { get; private set; }
        public string DriverContact{ get; private set; }
        public int NumberOfRides { get; private set; }
        public double AverageRating { get; private set; }

        public Driver(string driverName, string contact, int ridecount, double rating)
        {
            DriverName = driverName;
            DriverContact = contact;
            NumberOfRides = ridecount;
            AverageRating = rating;
        }
        public string ShowDriverDetails()
        {
            return string.Format($"drivername:{DriverName}--phonenumbber:{DriverContact}--ridecount:{NumberOfRides}--rating:{AverageRating}");
        }


    
    }
}
