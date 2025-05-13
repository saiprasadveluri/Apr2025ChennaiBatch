using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Enhancement : WorkItem
    {
        public string ComponentName { get; set; }
        public int RevisionID { get; set; }

        public Enhancement(string workItemTitle, string workItemDescription, DateTime creationDate, DateTime dueDate,
            int estimatedDuration, string urgencyLevel, string currentStage, string initiativeName, string summary, Member leader, string componentName, int revisionID)
            : base(workItemTitle, workItemDescription, creationDate, dueDate, estimatedDuration, urgencyLevel, currentStage, initiativeName, summary, leader)
        {
            ComponentName = componentName;
            RevisionID = revisionID;
        }

        public string DisplayEnhancement()
        {
            return string.Format($"{ComponentName}, Revision #{RevisionID}");
        }
    }
}
