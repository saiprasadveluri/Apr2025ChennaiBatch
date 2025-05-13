using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskmanager
{
    public enum Severity
    {
        Low,
        Medium,
        High,
        Critical
    }
    public class Bugs : Task
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public Severity Severity { get; set; }
        public Bugs(string title, string description, DateTime startDate,
                  DateTime endDate, int estimatedTime, Priority priority, Project project,
                  string sourceFileName, int lineNumber, Severity severity)
            : base(title, description, startDate, endDate, estimatedTime, priority, project)
        {
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }
        public override void UpdateStatus(TaskStatus newStatus, User user)
        {
            if (newStatus == TaskStatus.OnHold)
            {
                throw new InvalidOperationException("Bugs cannot be postponed (put OnHold).");
            }
            Status = newStatus;
        }
    }
}
