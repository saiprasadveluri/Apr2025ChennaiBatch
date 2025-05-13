using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskmanager1
{
    internal class Program
    {
        static void Main(string[] args)
        {
           

                Console.WriteLine("User Details");
                Users siteAdmin = new Users("admin@example.com", "adminPass", "Site Admin");
                Users projectManager = new Users("pm@example.com", "pmPass", "Project Manager");
                Users developer = new Users("dev@example.com", "devPass", "Developer");
                Users Qa = new Users("qa@example.com", "qaPass", "QA");

                Console.WriteLine(siteAdmin.ShowDetails());
                Console.WriteLine(projectManager.ShowDetails());
                Console.WriteLine(developer.ShowDetails());
                Console.WriteLine(Qa.ShowDetails());


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
                projectManager.AssignTaskToUser(task2, Qa);

                Console.WriteLine("\nAssigning Tasks:");
                Console.WriteLine("Task1 assigned to Developer: " + developer.Name);
                Console.WriteLine("Task2 assigned to QA: " + Qa.Name);


                developer.UpdateTaskStatus(task1, "InProgress");
                developer.AddCommentToTask(task1, "Started working on the fix.");
                developer.AddCommentToTask(task1, "Identified the root cause.");


                Qa.UpdateTaskStatus(task2, "In-Progress");
                Qa.AddCommentToTask(task2, "Testing dark mode feature.");
                Qa.UpdateTaskStatus(task2, "Closed");
                Qa.AddCommentToTask(task2, "Feature successfully tested & closed.");


                Console.WriteLine("\nTask1 Status and Comments:");
                Console.WriteLine(task1.ShowDetails());
                Console.WriteLine("\nTask2  Status and Comments:");
                Console.WriteLine(task2.ShowDetails());
            }
        } 
    }

