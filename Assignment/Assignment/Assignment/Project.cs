using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public User ProjectManager { get; set; }
        public User[] TeamMembers { get; set; }

        public Project(string title, string description, User projectManager, User[] teamMembers)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
            TeamMembers = teamMembers;
        }
    }
}
