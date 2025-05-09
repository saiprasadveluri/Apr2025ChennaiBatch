using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Driver
    {
        public int DriverId { get; set; }
        public string Name { get; set; }
        public long LicenseNumber{get;set;}

        public Driver(int id, string name, long licenseNumber)
        {
            DriverId = id;
            Name = name;
            LicenseNumber = licenseNumber;
        }
    }
}
