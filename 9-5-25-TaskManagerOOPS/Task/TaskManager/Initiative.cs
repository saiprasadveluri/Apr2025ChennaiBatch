using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Initiative
    {
        public string InitiativeName { get; set; }
        public string Summary { get; set; }
        public Member LeadMember { get; set; }
        public Member[] TeamRoster { get; set; } = new Member[15];
        public WorkItem[] WorkItems { get; set; } = new WorkItem[15];

        private int memberCount = 0;
        private int workItemCount = 0;

        public Initiative(string name, string summary, Member leader)
        {
            InitiativeName = name;
            Summary = summary;
            LeadMember = leader;
        }

        public void AddTeamMember(Member member)
        {
            if (member.UserRole == "Developer" || member.UserRole == "QA")
            {
                if (memberCount < TeamRoster.Length)
                {
                    TeamRoster[memberCount++] = member;
                    Console.WriteLine($"{member.Username} has joined the initiative.");
                }
                else
                {
                    Console.WriteLine("Error: Maximum team size reached.");
                }
            }
            else
            {
                Console.WriteLine($"Error: {member.Username} does not meet the required role criteria.");
            }
        }

        public void GenerateWorkItem(Member creator)
        {
            if (creator.UserRole != "Project Manager")
            {
                Console.WriteLine("Error: Only a Project Manager can initiate work items.");
                return;
            }

            if (workItemCount >= WorkItems.Length)
            {
                Console.WriteLine("Error: Work item list capacity reached.");
                return;
            }

            WorkItems[workItemCount] = new WorkItem("Enhance UI Design", "Implement a new visual theme",
                                         DateTime.Now, DateTime.Now.AddDays(7), 8, "Medium", "Pending", InitiativeName, Summary, LeadMember);
            workItemCount++;

            Console.WriteLine($"Project Manager {creator.Username} initiated a new work item.");
        }

        public virtual string RevealDetails()
        {
            return string.Format($"{InitiativeName}, {Summary}, {LeadMember?.Username}");
        }
    }
}
