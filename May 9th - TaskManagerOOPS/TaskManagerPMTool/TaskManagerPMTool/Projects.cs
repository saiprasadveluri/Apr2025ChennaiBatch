using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class Projects
    {
        public const int TeamStrength = 10;
        public string Title { get; set; }
        public string Description { get; set; }
        public Users ProjectManager { get; set; }
        public List<Users> TeamMembers { get; set; } = new List<Users>();
        public List<Tasks> Tasks { get; set; } = new List<Tasks>();

        public Projects(string title, string description, Users projectManager)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
            

        }
        public string GetProjectInfo()
        {
            return string.Format($"Project Title - {Title} \n Description - {Description} \n Project Manager - {ProjectManager?.UserName} \nTeam Members: {TeamMembers.Count}\nTasks: {Tasks.Count}");
        }

        public void ADDTeammembers(Users user)
        {
            if(user.Role == "Developer" || user.Role == "QA")
            {
                TeamMembers.Add(user);
                Console.WriteLine($"{user.UserName} added to project team.");
            }
            else
            {
                Console.WriteLine($"{user.UserName} must be either Developer or QA");
            }

        }
        public void AddTasks(Tasks task, Users user)
        {
            if(user.Role == "Project Manager")
            {
                Tasks.Add(task);
                Console.WriteLine($"task - {task.Title} added by {user.UserName} ");
         
            }
            else
            {
                Console.WriteLine("Only Project Manager can assign Tasks.");
            }

        }


    }
}