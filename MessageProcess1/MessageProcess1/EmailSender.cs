using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading;

namespace MessageProcess1
{
    internal class EmailSender
    {
        private Stack<string> _emails = new Stack<string>();
        public bool ContinueProcess { get; set; } = true;
        ManualResetEvent evtWrite= new ManualResetEvent(true);
        ManualResetEvent evtRead = new ManualResetEvent(false);
      
        public void AddMessagesToList()
        {
            int MsgId = 1;
            while (ContinueProcess)
            {
                evtWrite.WaitOne();                
                for (int i=0;i<4;++i)
                {
                    string message = $"Message : {MsgId}";
                    _emails.Push(message);
                    ++MsgId;
                    Thread.Sleep(100);
                }
                Console.WriteLine("Writing completed...");
                
                evtRead.Set();
            }
        }

        public void ProcessMessagesFromList()
        {
            while (ContinueProcess)
            { 
                    evtRead.WaitOne();         
                
                while (_emails.Count > 0)
                {
                    string message = _emails.Pop();
                    Console.WriteLine($"{message} Processed...");                    
                }
                Console.WriteLine("Reading completed...");
                Thread.Sleep(100);
                evtWrite.Set();
            }
        }
    }
}
