using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskmanager1
{
    internal class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public Users ProjectManager { get; set; }
        public List<Users> TeamMembers { get; set; } = new List<Users>();
        public List<Task> Tasks { get; set; } = new List<Task>();

        public Project(string title, string description, Users projectManager)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
        }

        public void AddTeamMember(Users member)
        {
            if (member.Role == "Developer" || member.Role == "QA")
            {
                TeamMembers.Add(member);
                Console.WriteLine($"{member.UserName} added to project team.");
            }
            else
            {
                Console.WriteLine($"{member.UserName} is not a Developer or QA.");
            }
        }

        public void AddTask(Task task, Users creator)
        {
            if (creator.Role != "Project Manager")
            {
                Console.WriteLine("Only a Project Manager can create tasks.");
                return;
            }

            Tasks.Add(task);
            Console.WriteLine($"Task '{task.Title}' added by {creator.UserName}.");
        }

        public virtual string GetProjectDetails()
        {
            return $"Project: {Title}\nDescription: {Description}\nManager: {ProjectManager?.UserName}\nTeam Members: {TeamMembers.Count}\nTasks: {Tasks.Count}";
        }
    }
}
