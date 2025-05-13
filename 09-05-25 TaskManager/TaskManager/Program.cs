
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
  internal class TaskManager
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Project Details");
      User manager = new User("Task Management Tool", "Project to manage tasks.", null, "Aanabel", "aanabel@example.com", "password123", "Project Manager");
      Project project = new Project("Task Management Tool", "Project to manage tasks.", manager);
      Console.WriteLine(project.ShowDetails());

      Console.WriteLine("User Details");
      User manager1 = new User("Task2 manager", "Project to manage tasks.", null, "suku", "suku@example.com", "123456", "Project Manager");
      User developer = new User("Task Management Tool", "Project to manage tasks.", manager, "vamsi", "vamsi@example.com", "45678", "Developer");
      User qa = new User("Task2 manager", "Project to manage tasks.", manager, "krishna", "krishna@example.com", "1432", "QA");
      Console.WriteLine(manager1.ShowDetails());
      Console.WriteLine(developer.ShowDetails());
      Console.WriteLine(qa.ShowDetails());


      Task task1 = new Task("Fix Login Issue", "Users unable to log in.",
                            DateTime.Now, DateTime.Now.AddDays(3), 4, "High", "Open", "Task Management Tool", "Project to manage tasks.", manager);
      Console.WriteLine("Task Details");
      Console.WriteLine(task1.ShowDetails());
      Feature feature1 = new Feature("Implement Dark Mode", "Add UI option to switch between light and dark themes.",
                                DateTime.Now, DateTime.Now.AddDays(7), 10, "Medium", "Open", "Task Management Tool", "Project to manage tasks.", manager,
                                "UISettings", 108);
      Console.WriteLine("Feature Details:");
      Console.WriteLine(feature1.ShowDetails());
      Bug bug1 = new Bug("Fix Login Issue", "Users unable to log in under certain conditions",
                    DateTime.Now, DateTime.Now.AddDays(6), 7, "High", "Open", "Task Management Tool", "Project to manage tasks.", manager,
                    "AuthService.cs", 42, "Critical");
      Console.WriteLine("Bug Details:");
      Console.WriteLine(bug1.ShowBug());

      project.ProjectManager = manager;
      project.TeamMembers[0] = developer;
      project.TeamMembers[1] = qa;
      Console.WriteLine("------------------Assigning the team members-------------------");
      project.AssignTeamMember(developer);
      project.AssignTeamMember(qa);
      Console.WriteLine("---------Create Task---------");
      project.CreateTask(manager);
      Console.WriteLine("-----------Assigning the task--------------");
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
