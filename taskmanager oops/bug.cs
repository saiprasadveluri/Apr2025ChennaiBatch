using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Bug : TaskItem
    {
        public string FileName { get; set; }
        public int ErrorLine { get; set; }
        public string ImpactLevel { get; set; }

        public Bug(
            string taskTitle,
            string taskDetails,
            DateTime beginDate,
            DateTime dueDate,
            int estimatedHours,
            string urgency,
            string currentState,
            User handler,
            string fileName,
            int errorLine,
            string impactLevel)
            : base(taskTitle, taskDetails, beginDate, dueDate, estimatedHours, urgency, currentState, handler)
        {
            FileName = fileName;
            ErrorLine = errorLine;
            ImpactLevel = impactLevel;
        }
    }
}
