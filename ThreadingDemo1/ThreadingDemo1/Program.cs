using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace ThreadingDemo1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //ThreadStart thDlg = new ThreadStart(MyThreadFunc);            
            //ParameterizedThreadStart pst = new ParameterizedThreadStart(MyParamFunc);
            //Thread th3=new Thread(pst);
            //th3.IsBackground = true;
            //th3.Start(20);
            //Console.WriteLine("Main Thread Before Join...");            
            //Console.WriteLine("Press any key to abort the thread...");
            //Console.ReadLine();
            //th3.Abort();
            //Console.WriteLine("New Thread Sate: " + th3.ThreadState);
            //th3.Join();//Blocking call.

            //Thread Pool
            //ThreadPool.GetMaxThreads(out int wt, out int cpt);
            //Console.WriteLine(wt);

            WaitCallback waitCallback = MyPoolFunc;    
            for (int n = 0; n < 20; ++n)
            {
                ThreadPool.QueueUserWorkItem(waitCallback, 20);
                ThreadPool.GetAvailableThreads(out int wt, out int cpt);
                Console.WriteLine("Available Pool Thredas: "+wt);
                Thread.Sleep(100);
            }
            
            Console.ReadLine();
            Console.WriteLine("Main Thread Reached End of Main");



            /*MyClass obj= new MyClass();
            
            Thread th1= new Thread(obj.ClassThreadFunc);//Instance Method.
            Thread th2= new Thread(obj.ClassThreadFunc);*/

            //th1.Start();
            //th2.Start();

            /*th1.Priority = ThreadPriority.Highest;

            Console.WriteLine("TH1 Before Start call: " + th1.ThreadState);

            th2.Start();
            th1.Start();

            Console.WriteLine("TH1 After Start call: " + th1.ThreadState);*/


        }

        public static void MyPoolFunc(object state)
        {
            int Val = Convert.ToInt32(state);
            int ThreadId = Thread.CurrentThread.ManagedThreadId;
            for (int i = 0; i < Val; i++)
            {
                Console.WriteLine($"From Thread: {ThreadId} Helo! {i}");
                Thread.Sleep(200);
            }
        }

        public static void MyParamFunc(object state)
        {
            int Val=Convert.ToInt32(state);
            int ThreadId = Thread.CurrentThread.ManagedThreadId;
            for (int i = 0; i < Val; i++)
            {
                Console.WriteLine($"From Thread: {ThreadId} Helo! {i}");
                Thread.Sleep(200);
            }
        }
        public static void MyThreadFunc()
        {
            int Count = 0;//Local to Thread.
            int ThreadId=Thread.CurrentThread.ManagedThreadId;
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine($"From Thread: {ThreadId} Helo! {Count}");
                ++Count;
            }            
        }

        public static void MyThreadFunc2()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Hi!" + i.ToString());
            }
        }

    }
}
