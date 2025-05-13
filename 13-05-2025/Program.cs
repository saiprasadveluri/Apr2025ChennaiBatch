using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Program
    {
        static void Main(string[] args)
        {

            var userService = new Userlist();
            var projectService = new Projectlist();
            var taskService = new TaskService();

            
            CreateUsers(userService);

        }


        static void CreateUsers(UserManagerService userService)
        {
            userService.CreateUser("Sahithi", "sahithi@example.com", "adminpass", Role.SiteAdmin);
            userService.CreateUser("Varsha", "varsha@example.com", "varshapass", Role.ProjectManager);
            userService.CreateUser("Varun", "varun@example.com", "varunpass", Role.Developer);
            userService.CreateUser("Vidya", "vidya@example.com", "vidyapass", Role.QA);
            userService.CreateUser("Rishi", "rishi@example.com", "rishipass", Role.Developer);
        }

        
        static void AddTeamMembersToProject(ProjectService projectService, UserManagerService userService, string projectTitle)
        {
            var dev = userService.GetUserByEmail("varun@example.com");
            var qa = userService.GetUserByEmail("vidya@example.com");
            projectService.AddTeamMember(projectTitle, dev);
            projectService.AddTeamMember(projectTitle, qa);
        }

       
        static void CreateTasks(TaskService taskService, Project projectA)
        {
            taskService.AddBugToProject(
                projectA,
                title: "abc.fix",
                description: "fix me",
                sourceFile: "Module1.cs",
                lineNumber: 64,
                severity: Severity.High,
                startDate: DateTime.Now,
                endDate: DateTime.Now.AddDays(5),
                estimatedTime: 3,
                priority: Priority.High
            );

            taskService.AddFeatureToProject(
                projectA,
                title: "change me",
                description: "make changes",
                moduleName: "AuthModule",
                changeRequestNumber: "10",
                startDate: DateTime.Now,
                endDate: DateTime.Now.AddDays(10),
                estimatedTime: 20,
                priority: Priority.Medium
            );
        }

        
        static void WorkOnTask(TaskService taskService, Project projectA, User devUser, string taskTitle)
        {
            taskService.UpdateTaskStatus(projectA, taskTitle, Status.InProgress, devUser);
            taskService.AddCommentToTask(projectA, taskTitle, "Looking into this issue.", devUser);
        }

       
        static void VerifyAndCloseBug(TaskService taskService, Project projectA, User qaUser, string taskTitle)
        {
            taskService.UpdateTaskStatus(projectA, taskTitle, Status.Resolved, qaUser);
            taskService.AddCommentToTask(projectA, taskTitle, "Verified fix, closing task.", qaUser);
            taskService.UpdateTaskStatus(projectA, taskTitle, Status.Closed, qaUser);
        }

        // Method to display all tasks and comments in a project
        static void DisplayProjectTasks(Project projectA)
        {
            Console.WriteLine("\nProject Tasks:");
            foreach (var task in projectA.Tasks)
            {
                Console.WriteLine($"- {task.Title} [{task.Status}]");
                foreach (var comment in task.Comments)
                {
                    Console.WriteLine($"   Comment by {comment.Author.Username} at {comment.Timestamp}: {comment.Content}");
                }
            }
        }





    }
    }
}
