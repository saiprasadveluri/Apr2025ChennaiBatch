using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskmanager
{
    internal class Features: Task
    {
        public string ModuleName { get; set; }
        public string ChangeRequestNumber { get; set; }
        public Features(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, Priority priority, Project project, string moduleName, string changeRequestNumber) : base(title, description, startDate, endDate, estimatedTime, priority, project)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }

        public override void UpdateStatus(TaskStatus newStatus, User user)
        {
            Status = newStatus;
        }
    }
}
