using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class driver
    {
        public int DriverId { get; set; }
        public string Name { get; set; }
        public string LicenseNumber { get; set; }

        public static driver CreateDriver()
        {
            Console.Write("Enter Driver Name: ");
            string name = Console.ReadLine();
            Console.Write("Enter Driver License Number: ");
            string licenseNumber = Console.ReadLine();

            return new driver { DriverId = new Random().Next(1000), Name = name, LicenseNumber = licenseNumber };
        }
    }
}
