using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("User Details");
            user siteAdmin = new user("admin@example.com", "adminPass", "Site Admin");
            user projectManager = new user("pm@example.com", "pmPass", "Project Manager");
            user developer = new user("dev@example.com", "devPass", "Developer");
            user qa = new user("qa@example.com", "qaPass", "QA");

            Console.WriteLine(siteAdmin.ShowDetails());
            Console.WriteLine(projectManager.ShowDetails());
            Console.WriteLine(developer.ShowDetails());
            Console.WriteLine(qa.ShowDetails());


            Project project = siteAdmin.CreateProject("Task Management Project", "A project to manage tasks and issues", projectManager);
            Console.WriteLine(project.ShowDetails());


            Task task1 = projectManager.CreateTask("Fix Login Issue", "Users unable to log in.");
            Task task2 = projectManager.CreateTask("Implement Dark Mode", "Add UI option to switch between light and dark themes.");
            project.AddTask(task1);
            project.AddTask(task2);

            Console.WriteLine("\nCreated Tasks:");
            Console.WriteLine(task1.ShowDetails());
            Console.WriteLine(task2.ShowDetails());


            projectManager.AssignTaskToUser(task1, developer);
            projectManager.AssignTaskToUser(task2, qa);

            Console.WriteLine("\nAssigning Tasks:");
            Console.WriteLine("Task1 assigned to Developer: " + developer.Name);
            Console.WriteLine("Task2 assigned to QA: " + qa.Name);


            developer.UpdateTaskStatus(task1, "In-Progress");
            developer.AddCommentToTask(task1, "Started working on the fix.");
            developer.AddCommentToTask(task1, "Identified the root cause.");


            qa.UpdateTaskStatus(task2, "In-Progress");
            qa.AddCommentToTask(task2, "Testing dark mode feature.");
            qa.UpdateTaskStatus(task2, "Closed");
            qa.AddCommentToTask(task2, "Feature successfully tested and closed.");


            Console.WriteLine("\nTask 1 Status and Comments:");
            Console.WriteLine(task1.ShowDetails());
            Console.WriteLine("\nTask 2 Status and Comments:");
            Console.WriteLine(task2.ShowDetails());
        }
    }
}
        }
    }
}
