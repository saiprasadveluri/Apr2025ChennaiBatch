using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskmanager
{
    internal class bugcs
    {
        public string Severity { get; set; }   // e.g., Critical, Major, Minor
        public string StepsToReproduce { get; set; }

        public Bug(string title, string description, DateTime startDate, DateTime endDate,
                   double estimatedTime, string priority, string status,
                   string projectTitle, string projectDescription, User createdBy,
                   string severity, string stepsToReproduce)
            : base(title, description, startDate, endDate, estimatedTime, priority, status,
                   projectTitle, projectDescription, createdBy)
        {
            Severity = severity;
            StepsToReproduce = stepsToReproduce;
        }

        public override string ShowDetails()
        {
            return base.ShowDetails() + $"\nType: Bug\nSeverity: {Severity}\nSteps: {StepsToReproduce}";
        }
    }
}
