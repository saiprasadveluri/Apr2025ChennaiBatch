using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TaskManager.Models
{
    public class Project
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

        public void AddTeamMember(User user) => TeamMembers.Add(user);
        public void AddTask(Task task) => Tasks.Add(task);
    }
}
