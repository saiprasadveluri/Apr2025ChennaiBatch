using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Threading;

namespace ThreadExceptionHandling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Action action = TaskFunction1;           
            Task<string> downlaodTask = new Task<string>(() =>
            {
                //Intro delay
                Console.WriteLine("File Downloading...");
                Task.Delay(2000).Wait();
                return "File Downloaded";
            });
            downlaodTask.ContinueWith(t =>
            {
                string TaskRes = t.Result;
                Console.WriteLine("Saving file after download");
            });
            downlaodTask.Start();
            //string res= downlaodTask.Result;
            for(int i=0;i<100;++i)
            {
                Console.Write(i);
            }
            //Console.WriteLine("Task Result: "+res);
            //Console.WriteLine($"File saved to Disk");
            Console.WriteLine("From Main");
            Console.ReadLine();
            /*Func<int> fdlg = TaskFunction2;
            Task<int> intTask = new Task<int>(fdlg);
            intTask.Start();
            int val2=intTask.Result;*/

            //Task task = new Task(action);
            //task.Start();
            //Task t1=Task.Run(action);
            //Task t2 = Task.Run(TaskFunction2);
            //Task t= Task.Factory.StartNew(action);
            //Task t = Task.Run(() => {
            //    Console.WriteLine("From Task--Lamda");
            //});
            //Task<int> t1 = Task<int>.Run(() =>
            //{
            //    return 10;
            //});
            //int Res=t1.Result;//Blocking call.
            //Console.WriteLine("REsult from Task: "+Res);

            // t1.Wait();//Blocking call.
            //Task.WaitAll(t1,t2);
            // Console.WriteLine("Wait Completed...");           
        }

        public static void TaskFunction1()
        {
            Console.WriteLine("From Task");
            Task.Delay(1000).Wait();
        }

        public static int TaskFunction2()
        {
            Console.WriteLine("From Task2");
            return 10;
        }


        /*public static void TaskFunction2()
        {
            Console.WriteLine("From Task2");
            Task.Delay(2000).Wait();
        }*/
        public static void SaveFile()
        {
            Console.WriteLine("Save file using System.IO classes");
        }

        public static void DownlaodFile(object url)
        {
            //Thread.Sleep(1000);//
            Console.WriteLine("Download completed from URL: "+url.ToString());
        }

        public static void MyThreadFunc(object sate)
        {
            int Val= Convert.ToInt32(sate);
            try
            {
                for (int i = -10; i < 10; ++i)
                {
                    Console.WriteLine(Val / i);//Exp if i=0
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
