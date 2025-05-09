using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Driver
    {

       
        public string driverName { get; private set; }

        public string driverPhn { get; private set; }

        public int no_of_drives { get; private set; }

        public Driver( string d_name , string d_phn, int n_drives)
        {

            driverName = d_name;
            driverPhn = d_phn;
            no_of_drives = n_drives;

        }
        public void ShowDriverDetails()
        {
            Console.WriteLine($"{driverName}-{driverPhn}-{no_of_drives}");
        }
        public string GetDriveDetails()
        {
            return string.Format($"{driverName}-{driverPhn}-{no_of_drives}");
        }

    }
}

