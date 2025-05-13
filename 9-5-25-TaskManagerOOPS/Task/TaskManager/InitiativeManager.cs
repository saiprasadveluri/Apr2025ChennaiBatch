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
    internal class InitiativeManager
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Initiative Details");
            Member leadMember = new Member("Initiative ", "Plan and execute enhancements.", null, "Sukku", "sukku@example.com", "securePass123", "LeadCoordinator");
            Initiative initiative = new Initiative("Initiative ", "Plan and execute enhancements.", leadMember);
            Console.WriteLine(initiative.RevealDetails());

            Console.WriteLine("Team Members");
            Member coordinator = new Member("Initiative2 ", "Leadership and oversight.", null, "Sai", "sai@example.com", "pass1236", "Coordinator");
            Member developer = new Member("Initiative2", "Software development tasks.", leadMember, "Venkat", "venky@example.com", "devSecret101", "Developer");
            Member qaSpecialist = new Member("Quality Control", "Test and validate components.", leadMember, "Ram", "ram@example.com", "qaPass3542", "QA");

            Console.WriteLine(coordinator.RevealDetails());
            Console.WriteLine(developer.RevealDetails());
            Console.WriteLine(qaSpecialist.RevealDetails());

            WorkItem workItem1 = new WorkItem("Authentication Issue", "Users facing login failures.",
                                  DateTime.Now, DateTime.Now.AddDays(4), 5, "High", "Open", "Initiative ", "Plan and execute enhancements.", leadMember);
            Console.WriteLine("Work Item Details");
            Console.WriteLine(workItem1.DisplayDetails());

            Enhancement enhancement1 = new Enhancement("Dark Mode Implementation", "Enable theme switching.",
                                      DateTime.Now, DateTime.Now.AddDays(10), 15, "Medium", "Pending", "Interface Upgrade", "Improve user experience.", leadMember,
                                      "UIConfig", 205);
            Console.WriteLine("Enhancement Details:");
            Console.WriteLine(enhancement1.DisplayEnhancement());

            Defect defect1 = new Defect("Authentication Failure", "Login system fails in certain conditions.",
                          DateTime.Now, DateTime.Now.AddDays(5), 7, "High", "Open", "User Access Tool", "Ensure secure authentication.", leadMember,
                          "AuthHandler.cs", 88, "Critical");
            Console.WriteLine("Defect Details:");
            Console.WriteLine(defect1.ShowDefectDetails());

            initiative.LeadMember = leadMember;
            initiative.TeamRoster[0] = developer;
            initiative.TeamRoster[1] = qaSpecialist;
            Console.WriteLine("------------------Assigning the team members-------------------");
            initiative.AddTeamMember(developer);
            initiative.AddTeamMember(qaSpecialist);

            Console.WriteLine("---------Generate Work Item---------");
            initiative.GenerateWorkItem(leadMember);

            Console.WriteLine("-----------Assigning the Work Item--------------");
            initiative.WorkItems[0].AllocateTask(developer);
            initiative.WorkItems[0].AllocateTask(qaSpecialist);

            Console.WriteLine("-------------Updating the Status-----------------");
            initiative.WorkItems[0].ModifyStatus("In-Progress", developer);
            initiative.WorkItems[0].ModifyStatus("Completed", qaSpecialist);
            initiative.WorkItems[0].ModifyStatus("Reviewed", leadMember);

            Console.WriteLine("------Adding Feedback----------------");
            initiative.WorkItems[0].AppendFeedback(developer, "Investigating authentication error.");
            initiative.WorkItems[0].AppendFeedback(developer, "Issue identified, implementing fix.");
            initiative.WorkItems[0].AppendFeedback(qaSpecialist, "Fix verified and approved.");
            initiative.WorkItems[0].AppendFeedback(leadMember, "Performing additional validation.");
        }
    }
}
