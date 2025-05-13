using System.Threading.Tasks;
using System;

namespace TaskManager.Models
{
    public class Bug : Task
    {
        private string sourceFileName;
        private int lineNumber;
        private string severity;

        public Bug(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, string sourceFileName, int lineNumber, string severity)
            : base(title, description, startDate, endDate, estimatedTime, priority, status)
        {
            this.sourceFileName = sourceFileName;
            this.lineNumber = lineNumber;
            this.severity = severity;
        }

       
        public string GetSourceFileName() { return sourceFileName; }
        public void SetSourceFileName(string value) { sourceFileName = value; }

        
        public int GetLineNumber() { return lineNumber; }
        public void SetLineNumber(int value) { lineNumber = value; }

        
        public string GetSeverity() { return severity; }
        public void SetSeverity(string value) { severity = value; }
    }
}