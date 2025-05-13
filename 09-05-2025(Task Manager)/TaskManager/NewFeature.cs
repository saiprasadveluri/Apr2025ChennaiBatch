using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class NewFeature : Task
    {
        public string ModuleName { get; set; }
        public int ChangeRequestNumber { get; set; }

        public NewFeature(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, string moduleName, int changeRequestNumber)
            : base(title, description, startDate, endDate, estimatedTime, priority, status)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }

        public override void DisplayTaskDetails()
        {
            Console.WriteLine($"Feature: {Title}, Module: {ModuleName}, CR#: {ChangeRequestNumber}, Estimated Time: {EstimatedTime} hours");
        }
    }


}
