using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public User ProjectManager { get; set; }
        public List<User> TeamMembers { get; set; } = new List<User>();
        public List<Task> Tasks { get; set; } = new List<Task>();

        public Project(string title, string description, User projectManager)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
        }

        public void AddTeamMember(User member)
        {
            if (member.role == "Developer" || member.role == "QA")
            {
                TeamMembers.Add(member);
                Console.WriteLine($"{member.userName} added to project team.");
            }
            else
            {
                Console.WriteLine($"{member.userName} is not a Developer or QA.");
            }
        }

        public void AddTask(Task task, User creator)
        {
            if (creator.role != "Project Manager")
            {
                Console.WriteLine("Only a Project Manager can create tasks.");
                return;
            }

            Tasks.Add(task);
            Console.WriteLine($"Task '{task.Title}' added by {creator.userName}.");
        }

        public virtual string ShowDetails()
        {
            return $"Project: {Title}\nDescription: {Description}\nManager: {ProjectManager?.userName}\nTeam Members: {TeamMembers.Count}\nTasks: {Tasks.Count}";
        }
    }
}
