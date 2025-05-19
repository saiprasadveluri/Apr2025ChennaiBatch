using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateCallbackDemo
{
    public class Company
    {
        string[] empNames =
        {
            "Sai",
            "Durga",
            "Prasad",
            "Ram",
            "Mary",
            "John"
        };
        public void PrintFilterNames(Predicate<string> filterMethod)
        {
            Console.WriteLine("Filtered Names: ");
            foreach (var empName in empNames)
            {
                bool status = filterMethod(empName);
                if(status)
                {
                    Console.WriteLine(empName);
                }
            }
        }
    }
}
