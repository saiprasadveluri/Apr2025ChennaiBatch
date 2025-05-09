using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ride_aggregator
{
    internal class Customer
    {
        string CustomerName;
        string CustomerContact;
        string CustomerAddress;
        public string Customername {
            get {  return CustomerName; } set { CustomerName = value; }
        }
        public string Customercontact
        { 
            get { return CustomerContact; }
            set { CustomerContact = value; }
            
        }
       public string Customeraddress
        {
            get { return CustomerAddress; }
            set
            {
                CustomerAddress = value;
            }
        }

       public Customer(string customerName, string phoneNumber, string address)
        {
            CustomerName = customerName;
            CustomerContact = phoneNumber;
            CustomerAddress = address;
            
        }
        public string ShowCustomerDetails()
        {
           return string.Format($"customername:{CustomerName}--phonenumbber:{CustomerContact}--Address:{CustomerContact}");
        }
    }
}
