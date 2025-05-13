using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Projectmanager
{
    public abstract class TaskBase
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double EstimatedTime { get; set; }
        public int Priority { get; set; } // 1 = High, 2 = Medium, 3 = Low
        public TaskStatus Status { get; set; } = TaskStatus.Open;
        public User AssignedTo { get; set; }
        public List<Comment> Comments { get; set; } = new();

        public abstract void DisplayDetails();
    }
}
