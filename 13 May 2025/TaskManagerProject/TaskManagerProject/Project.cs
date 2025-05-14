using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    public class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string ProjectManager { get; set; }
        public List<string> TeamMembers { get; set; } = new List<string>();
        public List<Task> Tasks { get; set; } = new List<Task>();
    }
}
