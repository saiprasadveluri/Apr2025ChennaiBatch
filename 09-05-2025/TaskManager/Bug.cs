using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Bug: Task
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public Severity Severity { get; set; }

        public Bug(string title, string description, string sourceFileName, int lineNumber, Severity severity)
            : base(title, description)
        {
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }

    }
}
