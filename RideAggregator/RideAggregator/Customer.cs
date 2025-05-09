using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {
        private int CustomerId { get; set; }
        private string Name { get; set; }
        private long Phone {  get; set; }
        private string Address { get; set; }

        public Customer(int id, string name,long phone, string address)
        {
           this.CustomerId = id;
            this.Name = name;
            this.Phone = phone;
            this.Address = address;

        }
    }
}
