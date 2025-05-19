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
            userService.CreateUser("Rishi", "rishi@example.com", "adminpass", Role.SiteAdmin);
            userService.CreateUser("Shivam", "shivam@example.com", "shivampass", Role.ProjectManager);
            userService.CreateUser("Nidhi", "nidhi@example.com", "nidhipass", Role.Developer);
            userService.CreateUser("Mohit", "mohit@example.com", "mohitpass", Role.QA);
        }

        
        static void AddTeamMembersToProject(ProjectService projectService, UserManagerService userService, string projectTitle)
        {
            var dev = userService.GetUserByEmail("shivam@example.com");
            var qa = userService.GetUserByEmail("mohit@example.com");
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
