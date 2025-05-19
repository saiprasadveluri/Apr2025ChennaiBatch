using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DownloadManagerApp
{
    public class DownloadManager
    {
        string _urlPath;
        public DownloadManager(string urlPath)
        {
            _urlPath = urlPath;
        }

        public void DownloadContent(SendNotification notifier)
        {
            bool Status = true;
            Console.WriteLine($"File Downloaded from Path :{_urlPath}");
            //SendSMS("Success In downlaoding");
            notifier("Success... Sending Notification.");//Call indirection
        }
    }
}
