using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //HttpHelper httpHelper = new HttpHelper();
            HttpHelper obj = HttpHelper.GetInstance();
            Console.WriteLine(obj.GetInstCount());
            //obj.ConnectoServre();
            //obj.RunCommand();
            HttpHelper obj2 = HttpHelper.GetInstance();
            Console.WriteLine(obj2.GetInstCount());
        }
    }
}
