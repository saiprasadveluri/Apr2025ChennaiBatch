using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class Task
    {
        public int TaskId {  get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public double EstimatedTime { get; set; }
        public PriorityType Priority {  get; set; } 
        public int ProjId {  get; set; }

    }
}
