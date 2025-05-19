using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class NewFeature: Task
    {
        public string ModuleName { get; set; }
        public string ChangeRequestNumber { get; set; }

        public NewFeature(string title, string description, string moduleName, string changeRequestNumber)
            : base(title, description)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }

    }
}
