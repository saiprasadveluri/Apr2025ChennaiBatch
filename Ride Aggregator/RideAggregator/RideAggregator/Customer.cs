using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {

        //Fields
        string customerName;
        string customerContact;
        string customerAddress;

        //properties
        public string CustomerName
        {
            get { return CustomerName; }
            set { CustomerName = value; }
        }
        
        public string Customercontact
        {
            get { return Customercontact; }
            set { Customercontact = value; }
        }

        public string CustomerAddress
        {
            get { return CustomerAddress; }
            set { CustomerAddress = value; }
        }

      //constructor

        public Customer(string customername, string customercontact, string customeraddress)
        { 
            customerName = customername;
            customerContact =customercontact;
            customerAddress = customeraddress;
        }

        public string GetCustomerInfo()
        {
            return string.Format($"Customer Name: {customerName}, has contact: {customerContact} and address: {customerAddress}");
        }


    }

}
         






   
