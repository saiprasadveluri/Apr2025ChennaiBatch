using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Driver
    {

        //Auto implemented properties
       public string driverName { get; private set; }
        public string driverContact { get; private set; }
        public int NumberOfRides { get; private set; }
        public double AverageRating { get; private set; }

        //constructor
        public Driver(string name,string contact,int ridecount,double rating)
        {
            driverName = name;
            driverContact = contact;
            NumberOfRides = ridecount;
            AverageRating = rating;

        }
        public string GetDriverInfo()
        {
            return string.Format($" driverName: {driverName}, has contact:{driverContact}, completed:{NumberOfRides},having rating of :{AverageRating}");
        }
    }
}
