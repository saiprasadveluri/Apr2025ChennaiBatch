using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    internal class customer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }

        public static customer CreateCustomer()
        {
            Console.Write("Enter Customer Name: ");
            string name = Console.ReadLine();
            Console.Write("Enter Customer Contact: ");
            string contact = Console.ReadLine();

            return new customer { CustomerId = new Random().Next(1000), Name = name, Contact = contact };
        }
    }
}
