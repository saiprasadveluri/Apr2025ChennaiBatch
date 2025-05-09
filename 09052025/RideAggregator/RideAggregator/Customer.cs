using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {
        private string Name { get; set; }
        private long Phone { get; set; }
        private string Address { get; set; }

        public Customer(string Name,long Phone, string Address)
        {
            this.Name = Name;
            this.Phone = Phone;
            this.Address = Address;
        }

        

        public void AddCustomer()
        {
            Console.WriteLine("Enter Customer Name: ");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Customer Phone No: ");
            Phone = Convert.ToInt64(Console.ReadLine());
            Console.WriteLine("Enter Driver Language: ");
            Console.WriteLine("Enter Customer Address: ");
            Address = Console.ReadLine();
        }

        public string ViewCustomer()
        {
            return string.Format($"Customer Name: {Name}\n Phone.No: {Phone}\n Address: {Address}");
            //Console.WriteLine($"Customer Name: {Name}\n Phone.No: {Phone}\n Address: {Address}");
        }

    }
}
