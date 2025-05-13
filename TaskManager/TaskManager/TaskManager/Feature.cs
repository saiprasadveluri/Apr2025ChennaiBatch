using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Feature:Task
    {
        public string ModuleName { get; set; }
        public string Benefit { get; set; }

        public Feature(string title, string description, DateTime startDate, DateTime endDate,
                       double estimatedTime, string priority, string status,
                       string projectTitle, string projectDescription, User createdBy,
                       string moduleName, string benefit)
            : base(title, description, startDate, endDate, estimatedTime, priority, status,
                   projectTitle, projectDescription, createdBy)
        {
            ModuleName = moduleName;
            Benefit = benefit;
        }

        public override string ShowDetails()
        {
            return base.ShowDetails() + $"\nType: Feature\nModule: {ModuleName}\nBenefit: {Benefit}";
        }
    }
}
    }
}
