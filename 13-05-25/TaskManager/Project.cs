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
        public UserInfo ProjectManager { get; set; }
        public UserInfo[] TeamMembers { get; set; } = new UserInfo[10];
        public Task[] Tasks { get; set; } = new Task[20];

        private int userCount = 0;
        private int taskCount = 0;

        public Project(string title, string description, UserInfo manager)
        {
            Title = title;
            Description = description;
            ProjectManager = manager;
        }
        public void AssignTeamMember(UserInfo user)
        {
            if (user.Role == "Dev" || user.Role == "QA")
            {
                if (userCount < TeamMembers.Length)
                {
                    TeamMembers[userCount++] = user;
                    Console.WriteLine($"{user.UserName} assigned to project");
                }
                else
                {
                    Console.WriteLine(" array is full");
                }
            }
            else
            {
                Console.WriteLine($"{user.UserName}  not a Developer or QA");
            }
        }
        public void CreateTask(UserInfo creator)
        {
            if (creator.Role != "Project Manager")
            {
                Console.WriteLine("Only a Project Manager can create tasks.");
                return;
            }

            if (taskCount >= Tasks.Length)
            {
                Console.WriteLine("Task list is full.");
                return;
            }

            Tasks[taskCount] = new Task("Fix Login Issue", "Users unable to log in",
                                         DateTime.Now, DateTime.Now.AddDays(5), 6, "High", "Open", Title, Description, ProjectManager);
            taskCount++;
            Console.WriteLine($"Project Manager {creator.UserName} created a new task.");
        }

        public virtual string ShowDetails()
        {
            return string.Format($"{Title}---{Description}---{ProjectManager?.UserName}");
        }

    }
}

