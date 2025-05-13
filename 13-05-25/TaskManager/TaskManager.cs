using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class TaskManager
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Project Details");
            UserInfo manager = new UserInfo("Task Management Tool", "Project to manage tasks.", null, "Mahesh", "mahesh@123.com", "12345", "Project Manager");
            Project project = new Project("Task Management Tool", "Project to manage tasks.", manager);
            Console.WriteLine(project.ShowDetails());
            Console.WriteLine("************************************");


            Console.WriteLine("User Details");
            UserInfo manager1 = new UserInfo("Task2 manager", "Project to manage tasks.", null, "prasad", "prasad@26.com", "435754", "Project Manager");
            UserInfo developer = new UserInfo("Task Management Tool", "Project to manage tasks.", manager, "Venky", "venky@123.com", "985474", "Dev");
            UserInfo qa = new UserInfo("Task2 manager", "Project to manage tasks.", manager, "Vara", "vara@78.com", "40002", "QA");
            Console.WriteLine(manager1.ShowDetails());
            Console.WriteLine(developer.ShowDetails());
            Console.WriteLine(qa.ShowDetails());

            Console.WriteLine("*******************");


            Task task1 = new Task("Fix Login Issue", "Users unable to log in.",

                                  DateTime.Now, DateTime.Now.AddDays(5), 6, "High", "Open", "Task Management Tool", "Project to manage tasks.", manager);
            Console.WriteLine("Task Details");
            Console.WriteLine(task1.ShowDetails());





            Console.WriteLine("----------------------------------------");

            Feature feature1 = new Feature("Implement Dark Mode", "Add UI option to switch between light and dark themes.",
                                      DateTime.Now, DateTime.Now.AddDays(7), 10, "Medium", "Open", "Task Management Tool", "Project to manage tasks.", manager,
                                      "UISettings", 108);
            Console.WriteLine("Feature Details:");
            Console.WriteLine(feature1.ShowDetails());
            Bug bug1 = new Bug("Fix Login Issue", "Users unable to log in under certain conditions",
                          DateTime.Now, DateTime.Now.AddDays(5), 7, "High", "Open", "Task Management Tool", "Project to manage tasks.", manager,
                          "AuthService.cs", 42, "Critical");
            Console.WriteLine("Bug Details:");
            Console.WriteLine(bug1.ShowBug());

            project.ProjectManager = manager;
            project.TeamMembers[0] = developer;

            project.TeamMembers[1] = qa;

            Console.WriteLine("********************Assigning the team members*******************");
            project.AssignTeamMember(developer);
            project.AssignTeamMember(qa);
            Console.WriteLine("****************Create Task**************************");
            project.CreateTask(manager);

            Console.WriteLine("***Assigning the task***");
            project.Tasks[0].AssignTask(developer);
            project.Tasks[0].AssignTask(qa);


            Console.WriteLine("-------------Updating the status-----------------");
            project.Tasks[0].UpdateStatus("In-Progress", developer);
            project.Tasks[0].UpdateStatus("Closed", qa);
            project.Tasks[0].UpdateStatus("Closed", manager);


            Console.WriteLine("------Adding Comments----------------");
            project.Tasks[0].AddComment(developer, "Investigating login issue");
            project.Tasks[0].AddComment(developer, "Issue identified, working on a fix");
            project.Tasks[0].AddComment(qa, "Issue resolved");
            project.Tasks[0].AddComment(manager, "Investigating the issue");


        }
    }
}
    

