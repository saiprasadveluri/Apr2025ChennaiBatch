using System.Threading.Tasks;
using System;

namespace TaskManager.Models
{
    public class Bug : Task
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public string Severity { get; set; }

        public Bug(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, string sourceFileName, int lineNumber, string severity)
            : base(title, description, startDate, endDate, estimatedTime, priority, status)
        {
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }
    }
}

