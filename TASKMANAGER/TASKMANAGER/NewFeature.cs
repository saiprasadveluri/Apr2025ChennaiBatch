using System.Threading.Tasks;
using System;

namespace TaskManager.Models
{
    public class NewFeature : Task
    {
        public string ModuleName { get; set; }
        public int ChangeRequestNumber { get; set; }

        public NewFeature(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, string moduleName, int changeRequestNumber)
            : base(title, description, startDate, endDate, estimatedTime, priority, status)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }
    }
}
