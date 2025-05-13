using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class Bug : Tasks
    {
        public string TaskType { get; set; }
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public string Severity { get; set; }

        public Bug(string taskType, string sourceFileName, int lineNumber, string severity, string title, string description, DateTime startDate, DateTime endDate, double estmTime, string priority, string status, string projectTitle, Users createdBy):base(title, description,startDate,endDate,estmTime, priority, status, projectTitle, createdBy) 
        { 
            TaskType = taskType;
            SourceFileName = sourceFileName;
            LineNumber = lineNumber;
            Severity = severity;
        }

        public override bool Task_Type()
        {
            return TaskType == "BUG";
        }

        public override string GetTaskInfo()
        {
            string baseDetails = base.GetTaskInfo();
            return string.Format($"{baseDetails} \n Bug Details Source File Name - {SourceFileName} \n Line Number - {LineNumber} \n Severity - {Severity}");
        }
    }
}