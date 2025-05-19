using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace DelegateCallbackDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Company company = new Company();
            //company.PrintFilterNames(FilterBasedOnStartString);
            //company.PrintFilterNames(FilterOnLength);
            string flt = "du";
            company.PrintFilterNames(str => str.ToUpper().Contains(flt.ToUpper()));
        }

        private static bool FilterBasedOnStartString(string filterString)
        {
            if (filterString.ToUpper().Contains("D"))
                return true;
            else
                return false;
        }

        private static bool FilterOnLength(string filterString)
        {
            return filterString.Length > 3;
        }
    }
}
