using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Bug : Task
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

        public override void DisplayTaskDetails()
        {
            Console.WriteLine($"Bug: {Title}, Severity: {Severity}, File: {SourceFileName}, Line: {LineNumber}, Estimated Time: {EstimatedTime} hours");
        }
    }

}
