using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class NewFeature : Task
    {
        public string ModuleName { get; set; }
        public int ChangeRequestNumber { get; set; }

        public NewFeature(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, User assignedUser, string moduleName, int changeRequestNumber)
            : base(title, description, startDate, endDate, estimatedTime, priority, status, assignedUser)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }

        public void PostponeFeature()
        {
            Status = "Postponed";
        }
    }
}
