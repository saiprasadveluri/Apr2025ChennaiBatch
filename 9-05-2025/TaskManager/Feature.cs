using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Feature:Task
    {
        public string ModuleName { get; set; }
        public int ChangeRequestNumber { get; set; }

        public Feature(string ttitle, string tdescription, DateTime startdate, DateTime enddate,
            int estimated, string priority, string status, string title, string description, User manager, string moduleName, int changeRequestNumber)
            : base(ttitle, tdescription, startdate, enddate, estimated, priority, status, title, description, manager)
            { 
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }
        public string ShowFeature()
        {
            return string.Format($"{ModuleName}---{ChangeRequestNumber}");
        }
    }
}
