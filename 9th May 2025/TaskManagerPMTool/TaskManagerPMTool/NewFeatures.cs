using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class NewFeatures : Tasks
    {
        public string TaskType { get; set; }
        public string ModuleName { get; set; }
        public int ChanngeRequestNumber { get; set; }

        public NewFeatures(string taskType, string moduleName, int changeRequestNumber, string title, string description, DateTime startDate, DateTime endDate, 
            double estmTime, string priority, string status, string projectTitle, 
            Users createdBy) : base(title, description, startDate, endDate, estmTime, priority, status, projectTitle, createdBy)
        {
            TaskType = taskType;
            ModuleName = moduleName;
            ChanngeRequestNumber = changeRequestNumber;
        }

        public override bool Task_Type()
        {
            return TaskType == "NEW FEATURE";
        }
        public override string GetTaskInfo()
        {
            string baseDetails = base.GetTaskInfo();
            return string.Format($" {baseDetails} \n Module Name - {ModuleName} \n Change Request Number - {ChanngeRequestNumber}");
        }

    }
}