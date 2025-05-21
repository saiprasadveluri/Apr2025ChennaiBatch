using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace MessageProcess1
{
    internal class Program
    {        
        static void Main(string[] args)
        {
            EmailSender sender = new EmailSender();
            Thread thSender = new Thread(sender.AddMessagesToList);
            Thread thProcessor = new Thread(sender.ProcessMessagesFromList);
            thSender.Start();
            thProcessor.Start();
            Console.WriteLine("Press Any Key to continue...");
            Console.ReadLine();
            sender.ContinueProcess = false;
            /*
            NumberCounter numberCounter = new NumberCounter();
            Thread th1 = new Thread(numberCounter.PrintSeries);
            Thread th2 = new Thread(numberCounter.PrintSeries);
            th1.Start();
            th2.Start();
            Console.ReadLine();
            numberCounter.ContinueProcess = false;*/
        }
    }
}
