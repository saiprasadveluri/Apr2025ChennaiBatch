using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Project
    {
        public string ProjectTitle { get; set; }
        public string ProjectDetails { get; set; }
        public User ProjectManager { get; set; }
        public User[] TeamMembers { get; set; }

        public Project(string projectTitle, string projectDetails, User projectManager, User[] teamMembers)
        {
            ProjectTitle = projectTitle;
            ProjectDetails = projectDetails;
            ProjectManager = projectManager;
            TeamMembers = teamMembers;
        } 
    }
}
