using System;
using System.Collections.Generic;
namespace TaskManager.Models
{
    public class Project
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public User ProjectManager { get; set; }
        public List<User> TeamMembers { get; set; }
        public List<Task> Tasks { get; set; }
        public Project(string title, string description, User projectManager)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
            TeamMembers = new List<User>();
            Tasks = new List<Task>();
        }
        public void AddTeamMember(User user)
        {
            if (user.Role != UserRole.Developer && user.Role != UserRole.QA)
            {
                Console.WriteLine("Only Developers and QAs can be added to a project.");
                return;
            }

            TeamMembers.Add(user);
            Console.WriteLine($"Added {user.UserName} to project '{Title}'.");
        }
    }
}