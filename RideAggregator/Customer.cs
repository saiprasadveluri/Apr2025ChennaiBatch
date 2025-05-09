using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {
        
         public string CustomerName { get; set; }

         public string CustomerContact { get; set; }

        public string CustomerAddress { get; set; }


        public Customer(string customerName, string CustomerCOntact, string CustomerAddress)
        {
            CustomerName = CustomerName;
            CustomerContact = CustomerContact;
            CustomerAddress = CustomerAddress;
        }

        public string GetCustomerDetails()
        {
            return string.Format($"{CustomerName}---{CustomerContact}---{CustomerAddress}");
        }
    }
}
