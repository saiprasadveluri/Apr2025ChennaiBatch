using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonDemo
{
    internal class HttpHelper
    {
        static HttpHelper helperObj;
        static int InstCount = 0;
        private HttpHelper()//Private constructor
        {

        }

        public static HttpHelper GetInstance()
        {
            if (helperObj == null)
            {
                ++InstCount;
                helperObj = new HttpHelper();
            }
            return helperObj;
        }

        public int GetInstCount()
        {
            return InstCount;
        }
        public string ConnectoServre()
        {
            return "Conncted";
        }
        public string RunCommand()
        {
            return "Command Executed";
        }
    }
}
