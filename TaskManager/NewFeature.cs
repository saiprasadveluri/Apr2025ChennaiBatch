using System;
using System.Threading.Tasks;
using Task = TaskManager.Models.Task;
namespace TaskManager.Models
{
    public class NewFeature : Task
    {
        public string ModuleName { get; set; }
        public string ChangeRequestNumber { get; set; }
        public NewFeature(string title, string description, DateTime startDate,DateTime endDate, int estimatedTime, Priority priority, Project project,string moduleName, string changeRequestNumber): base(title, description, startDate, endDate, estimatedTime, priority, project)
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
