using System;
using System.Collections.Generic;
using TaskManager.Models;

namespace TaskManager.Services
{
    public class TaskManagerApp
    {
        private List<User> users = new List<User>();
        private List<Project> projects = new List<Project>();

        public void RegisterUser(string username, string email, string password, UserRole role)
        {
            users.Add(new User(username, email, password, role));
        }

        public User Login(string email, string password)
        {
            return users.Find(user => user.Email == email && user.Password == password);
        }

        public void CreateProject(string title, string description, User projectManager)
        {
            projects.Add(new Project(title, description, projectManager));
        }

        public void AssignTask(Project project, Task task)
        {
            project.AddTask(task);
        }

        public void DisplayProjects()
        {
            foreach (var project in projects)
            {
                Console.WriteLine($"Project: {project.Title}, Manager: {project.ProjectManager.Username}");
            }
        }
    }
}
