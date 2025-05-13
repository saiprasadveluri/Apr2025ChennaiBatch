using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Bug : Task
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public string Severity { get; set; }

        public Bug(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, User assignedUser, string sourceFileName, int lineNumber, string severity)
            : base(title, description, startDate, endDate, estimatedTime, priority, status, assignedUser)
        {
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }
    }
}
