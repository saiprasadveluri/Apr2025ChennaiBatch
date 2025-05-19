using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DownloadManagerApp
{
    public abstract class MessageNotifier
    {
        protected virtual void Setup()
        {

        } 
        public abstract void Notify(string message);
    }

    public class SMSNotifier: MessageNotifier
    {
        protected override void Setup()
        {
            Console.WriteLine("Settingup the SMS server...");
        }
        public override void Notify(string msg)
        {
            Setup();
            Console.WriteLine("Through SMS: " + msg);
        }
    }

    public class EmailNotifier : MessageNotifier
    {
        protected override void Setup()
        {
            Console.WriteLine("Settingup the SMTP server...");
        }
        public override void Notify(string msg)
        {
            Setup();
            Console.WriteLine("Through Email: " + msg);
        }
    }
}
