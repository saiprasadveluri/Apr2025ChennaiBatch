using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class NewFeature : TaskItem
    {
        public string FeatureModule { get; set; }
        public int RequestID { get; set; }

        public NewFeature(
            string taskTitle,
            string taskDetails,
            DateTime beginDate,
            DateTime dueDate,
            int estimatedHours,
            string urgency,
            string currentState,
            User handler,
            string featureModule,
            int requestID)
            : base(taskTitle, taskDetails, beginDate, dueDate, estimatedHours, urgency, currentState, handler)
        {
            FeatureModule = featureModule;
            RequestID = requestID;
        }

        public void PostponeFeature()
        {
            Status = "Postponed";
        }
    }
}
