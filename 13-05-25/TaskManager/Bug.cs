using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Bug:Task
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public string Severity { get; set; }


        public Bug(string ttitle, string tdescription, DateTime startdate, DateTime enddate,
            int estimated, string priority, string status, string title, string description, UserInfo manager, string sourceFileName, int lineNumber, string severity)
            : base(ttitle, tdescription, startdate, enddate, estimated, priority, status, title, description, manager)
        {
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }
        public string ShowBug()
        {
            return string.Format($"{SourceFileName}---{LineNumber}---{Severity}");
        }
    }
}
    
