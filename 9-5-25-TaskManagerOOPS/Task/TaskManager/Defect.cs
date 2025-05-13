using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Defect : WorkItem
    {
        public string AffectedFile { get; set; }
        public int ErrorLine { get; set; }
        public string SeverityLevel { get; set; }

        public Defect(string workItemTitle, string workItemDescription, DateTime creationDate, DateTime dueDate,
            int estimatedDuration, string urgencyLevel, string currentStage, string initiativeName, string summary, Member leader, string affectedFile, int errorLine, string severityLevel)
            : base(workItemTitle, workItemDescription, creationDate, dueDate, estimatedDuration, urgencyLevel, currentStage, initiativeName, summary, leader)
        {
            AffectedFile = affectedFile;
            ErrorLine = errorLine;
            SeverityLevel = severityLevel;
        }

        public string ShowDefectDetails()
        {
            return string.Format($"{AffectedFile} --- Line {ErrorLine} --- Severity: {SeverityLevel}");
        }
    }
}
