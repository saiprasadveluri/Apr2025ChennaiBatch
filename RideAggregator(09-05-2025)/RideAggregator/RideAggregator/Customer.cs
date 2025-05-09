using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {//Fields
        string customerName;
        string customerContact;
        string customerAddress;
        //Properties
        public string CustomerName
        {
            get { return customerName; }
            set { customerName = value; }
        }
        public string CustomerContact
        {
            get { return customerContact; }
            set { customerContact = value; }
        }
        public string CustomerAddress
        {
            get { return customerAddress; }
            set { customerAddress = value; }
        }
        //Constructor
        public Customer(string name, string contact, string address)
        {
            customerName = name;
            customerContact = contact;
            customerAddress = address;
        }

        public string GetCustomerInfo()
        {
            return string.Format($"Customer Name: {customerName}, has contact: {customerContact} and address: {customerAddress}");
        }

    }
}
