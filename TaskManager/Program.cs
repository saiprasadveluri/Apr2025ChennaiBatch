using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Models;

namespace TaskManager
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var taskManager = new Services.TaskManagerService();
            
            if (taskManager.Login("admin@taskmanager.com", "admin123"))
            {
                Console.WriteLine("Logged in as admin");
                
                var pm = taskManager.CreateUser("PM1", "pm@taskmanager.com", "pm123", UserRole.ProjectManager);
                
                var project = taskManager.CreateProject("Website Redesign", "Redesign company website", pm);
                
                var dev1 = taskManager.CreateUser("Dev1", "dev1@taskmanager.com", "dev123", UserRole.Developer);
                var dev2 = taskManager.CreateUser("Dev2", "dev2@taskmanager.com", "dev123", UserRole.Developer);
                var qa1 = taskManager.CreateUser("QA1", "qa1@taskmanager.com", "qa123", UserRole.QA);
                
                project.AddTeamMember(dev1);
                project.AddTeamMember(dev2);
                project.AddTeamMember(qa1);
                
                var bugTask = taskManager.CreateTask("Login bug", "Login fails on mobile",
                    DateTime.Now, DateTime.Now.AddDays(3), 4, Priority.High, project, true,
                    "LoginController.cs", "42", Severity.High);
                var featureTask = taskManager.CreateTask("Dark mode", "Add dark mode option",
                    DateTime.Now, DateTime.Now.AddDays(7), 8, Priority.Medium, project, false,
                    "UI", "CR-2023-001", null);
                
                taskManager.AssignTask(bugTask, dev1);
                taskManager.AssignTask(featureTask, dev2);
                Console.WriteLine("Setup complete. Tasks created and assigned.");
            }
            else
            {
                Console.WriteLine("Login failed");
            }
        }
    }
    }
