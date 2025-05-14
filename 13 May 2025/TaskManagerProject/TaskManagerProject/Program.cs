using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    internal class Program
    {
        static void Main()
        {
            Console.WriteLine("Welcome to Task Manager Project!");

            // Create a sample user
            User admin = new User { UserName = "AdminUser", Email = "admin@example.com", Password = "securepassword", Role = RoleType.SiteAdmin };

            // Create a UserService and add the user
            UserService userService = new UserService();
            userService.AddUser(admin);

            // Display user information
            Console.WriteLine($"User Created: {admin.UserName} ({admin.Role})");

            // Create a sample project
            Project project = new Project
            {
                Title = "Task Management System",
                Description = "A project for managing tasks efficiently.",
                ProjectManager = "John Doe",
                TeamMembers = new List<string> { "Alice", "Bob" }
            };

            Console.WriteLine($"Project Created: {project.Title} by {project.ProjectManager}");

            // Create a sample task
            Task bugTask = new Bug
            {
                Title = "Fix Login Issue",
                Description = "Resolve authentication failure in login module.",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddDays(3),
                Priority = PriorityType.High,
                Status = TaskStatus.Open,
                SourceFileName = "AuthController.cs",
                LineNumber = 42,
                Severity = "Critical",
                AssignedTo = "Alice"
            };

            // Create a TaskService and add the task
            TaskService taskService = new TaskService();
            taskService.AddTask(bugTask);

            Console.WriteLine($"Task Created: {bugTask.Title} (Assigned to: {bugTask.AssignedTo})");

            // Simulate status update
            taskService.UpdateTaskStatus(bugTask, TaskStatus.InProgress);
            Console.WriteLine($"Task Status Updated: {bugTask.Title} -> {bugTask.Status}");

            Console.WriteLine("Task Manager Initialized Successfully.");
        }
    }
}





