using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Program
    {
        static void Main()
        {
            Console.WriteLine("Initializing Bug Tracker System...\n");

            // 1. Create Site Admin
            User siteAdmin = new User("Michael", "michael@admin.com", "admin123", "SiteAdmin");

            // 2. Create Project Manager, Developer, and QA
            User projectManager = new User("Sophia", "sophia@company.com", "sophia123", "Project Manager");
            Developer dev = new Developer("David", "david@devteam.com", "davidpass");
            QA qa = new QA("Emma", "emma@qa.com", "emmaTest");

            Console.WriteLine($"Users Created:\n- {siteAdmin.UserName} (Site Admin)\n- {projectManager.UserName} (Project Manager)\n- {dev.UserName} (Developer)\n- {qa.UserName} (QA)\n");

            // 3. Create a Project and Assign the Project Manager
            Project project = new Project("Bug Tracker System", "System for managing software bugs efficiently", projectManager, 5);
            Console.WriteLine($"Project '{project.Title}' created and assigned to {projectManager.UserName}\n");

            // 4. Create Tasks (Bug and New Feature)
            Bug bugTask = new Bug("Resolve Payment Error", "Fix issue with online payment processing", DateTime.Now, DateTime.Now.AddDays(4), 5, "High", "Open", "PaymentModule.cs", 50, "Critical");
            NewFeature featureTask = new NewFeature("Integrate AI Chatbot", "Implement AI-powered customer support chatbot", DateTime.Now, DateTime.Now.AddDays(10), 15, "Medium", "Open", "Chatbot_Module", 205);

            // 5. Add Tasks to Project
            project.AddTask(bugTask);
            project.AddTask(featureTask);

            // 6. Assign Bug Task to Developer
            Console.WriteLine($"Task '{bugTask.Title}' assigned to Developer '{dev.UserName}'\n");

            // 7. Developer Updates Status & Assigns Task to QA
            dev.UpdateTaskStatus(bugTask, "In-Progress");
            dev.AddComment(bugTask, "Investigating issue with transaction failures.");
            dev.AssignTaskToQA(bugTask, qa);

            // 8. QA Tests Task & Closes It
            qa.UpdateTaskStatus(bugTask, "Closed");
            qa.AddComment(bugTask, "Bug fixed. Transactions are now successful.");

            // 9. Display Task Details & Comments
            Console.WriteLine("\nTask Details:");
            bugTask.DisplayTaskDetails();
            bugTask.DisplayComments();
            featureTask.DisplayTaskDetails();

            Console.WriteLine("\nBug Tracker System Process Completed!");
        }
    }


}
