using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace ThreadingDemo1
{
    public class MyClass
    {
        int Count=0;//Common Data shared between therads.
        public void ClassThreadFunc()
        {
            int ThreadId = Thread.CurrentThread.ManagedThreadId;
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"From Thread : {ThreadId} - Count: {Count}");
                ++Count;
            }
        }
    }
}
