
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaskManagement.Enums;
namespace TaskManagement.Models
{
    internal class Bugs : Tasks
    {
        public string SourceFile;
        public int LineNumber;
        public Severity SeverityLevel;

        public Bugs(string sourceFile, int lineNumber, Severity severityLevel,
                   string title, string description, DateTime startDate, DateTime endDate,
                   int estimatedTime, Priority priorityLevel, TaskStatus status,
                   User assignedTo, int maxComments)
            : base(title, description, startDate, endDate, estimatedTime,
                   priorityLevel, status, assignedTo, maxComments)
        {
            SourceFile = sourceFile;
            LineNumber = lineNumber;
            SeverityLevel = severityLevel;
        }

        public override void Display()
        {
            Console.WriteLine($"Bug: {Title}");
            Console.WriteLine($"File: {SourceFile}, Line: {LineNumber}");
            Console.WriteLine($"Severity: {SeverityLevel}, Priority: {PriorityLevel}, Status: {Status}");
            Console.WriteLine($"Assigned To: {AssignedTo?.UserName ?? "Unassigned"}");
        }
    }
}
