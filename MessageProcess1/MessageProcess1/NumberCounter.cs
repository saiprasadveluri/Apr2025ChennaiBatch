using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MessageProcess1
{
    internal class NumberCounter
    {
        long val = 0;
        object lockObj = new object();
        public bool ContinueProcess { get; set; } = true;
        public void PrintSeries()
        {
            int ThreadId=Thread.CurrentThread.ManagedThreadId;
            while (ContinueProcess)
            {
                try
                {
                    Monitor.Enter(lockObj);                   
                    for (int n = 0; n < 10; n++)
                    {
                        Console.WriteLine($"Thread {ThreadId}: - {val}");
                        Thread.Sleep(100);
                        ++val;
                    }                   
                    Console.WriteLine($"{ThreadId}-Completed printing series...");
                }
                finally { Monitor.Exit(lockObj); }

            }
        }
    }
}
