using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Projectmanager
{
    public class task
    {
        public string Title;
        public string Description;
        public string StartDate;
        public string EndDate;
        public int EstimatedHours;
        public string Priority;
        public string Status;
        public string Type;
        public string AssignedTo;
        public List<comment> Comments = new List<comment>();
    }
}
