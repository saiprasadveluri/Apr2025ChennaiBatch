using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.Win32;

namespace Projectmanager
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var admin = new User { Id = 1, UserName = "shri", Email = "shri@gmail.com", Password = "pass", Role = UserRole.SiteAdmin };
            var pm = new User { Id = 2, UserName = "varsha", Email = "varsha@mail.com", Password = "pass", Role = UserRole.ProjectManager };
            var dev = new User { Id = 3, UserName = "nidhi", Email = "nidhi@mail.com", Password = "pass", Role = UserRole.Developer };
            var qa = new User { Id = 4, UserName = "harimail" Email="hari@mail.com", Password = "pass", Role = UserRole.QA };

            // Project
            var project = new Project
            {
                Id = 101,
                Title = "Task Manager",
                Description = "Manage Tasks",
                ProjectManager = pm
            };
            project.TeamMembers.AddRange(new[] { dev, qa });

            // Tasks
            var bug = new Bug
            {
                Id = 1,
                Title = "Login Failure",
                Description = "Login crashes on invalid input",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddDays(3),
                EstimatedTime = 8,
                Priority = 1,
                AssignedTo = dev,
                SourceFileName = "Login.cs",
                LineNumber = 42,
                Severity = "High"
            };

            var feature = new NewFeature
            {
                Id = 2,
                Title = "Add Dashboard",
                Description = "New dashboard for PM",
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddDays(5),
                EstimatedTime = 12,
                Priority = 2,
                AssignedTo = qa,
                ModuleName = "Dashboard",
                ChangeRequestNumber = "CR102"
            };

            project.Tasks.AddRange(new TaskBase[] { bug, feature });

            // Add comment
            bug.Comments.Add(new comment { Text = "Need stack trace", Author = qa });

            // Display
            Console.WriteLine("Project: " + project.Title);
            Console.WriteLine("Project Manager: " + project.ProjectManager.UserName);
            Console.WriteLine("Team: " + string.Join(", ", project.TeamMembers.Select(u => u.UserName)));

            foreach (var task in project.Tasks)
            {
                task.DisplayDetails();
                Console.WriteLine("  Status: " + task.Status);
                foreach (var comment in task.Comments)
                {
                    Console.WriteLine("  Comment by " + comment.Author.UserName + ": " + comment.Text);
                }


            }
    }
}
