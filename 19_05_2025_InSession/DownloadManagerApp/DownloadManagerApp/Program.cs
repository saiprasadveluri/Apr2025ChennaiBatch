using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DownloadManagerApp
{
    public delegate void SendNotification(string msg);
    public class Program
    {
        static void Main(string[] args)
        {
            MessageNotifier messageNotifier1;
            Console.WriteLine("1: SMS Notification /2: Email Notification");
            int opt=int.Parse(Console.ReadLine());
            if (opt == 1)
            {
                messageNotifier1 = new SMSNotifier();
            }
            else
            {
                messageNotifier1 = new EmailNotifier();
            }

            SendNotification notifyObj = messageNotifier1.Notify;

            DownloadManager manager = new DownloadManager("http://ipaddress/endpoint");
            manager.DownloadContent(notifyObj);
        }
       
    }
}
