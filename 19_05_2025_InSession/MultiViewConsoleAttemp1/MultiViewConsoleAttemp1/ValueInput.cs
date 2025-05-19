using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiViewConsoleAttemp1
{
    //Delegate declar
    public delegate void ValueAddDelegate();
    public class ValueInput
    {        
        public event ValueAddDelegate ValueAdded;//Event       
       
        public void AddData()
        {
            Console.WriteLine("New Value Added...");
            
            if (ValueAdded != null)//Subscribers are avialable
                ValueAdded();//Raise Event
        }
    }
}
