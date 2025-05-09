using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Customer
    {
        string Cust_id;
        string Cust_name;
        string Cust_loc;
        string Cust_phn;

        public string CustId
        {
            get { return Cust_id; }
            set { Cust_id = value; }
        }

        public string CustName
        {
            get { return Cust_name; }
            set { Cust_name = value; }
        }

        string Custname { get; set; }

        string CustLoc { get; set; }

        string CustPhn { get; set; }

        public Customer( string c_name, string c_loc, string c_phn)
        {
            
            Custname = c_name;
            CustLoc = c_loc;
            CustPhn = c_phn;
        }
        public void ShowCustomerDetails()
        {
            Console.WriteLine($"{Custname}-{CustLoc}-{CustPhn}");
        }
        public string GetCustDetails()
        {
            return string.Format($"{Custname}-{CustLoc}-{CustPhn}");
        }
    }
}
