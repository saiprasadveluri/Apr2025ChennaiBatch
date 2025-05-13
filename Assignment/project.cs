using System;
using System.Collections.Generic;

namespace ProjectManagementSystem
{
    internal class ProjectPlan
    {
        private readonly List<Member> team = new List<Member>();
        private readonly List<Job> tasks = new List<Job>();

        public string Name { get; set; }
        public string Overview { get; set; }
        public Member Lead { get; set; }

        public ProjectPlan(string name, string overview, Member lead)
        {
            Name = name;
            Overview = overview;
            Lead = lead;
        }

        public void AddMember(Member member)
        {
            if (!team.Contains(member))
            {
                team.Add(member);
            }
        }

        public void RemoveMember(Member member)
        {
            team.Remove(member);
        }

        public void AssignTask(Job job)
        {
            tasks.Add(job);
        }

        public Job FindTask(string jobName)
        {
            return tasks.Find(t => t.JobName == jobName);
        }

        public IEnumerable<Member> GetTeam()
        {
            return team;
        }

        public IEnumerable<Job> GetTaskList()
        {
            return tasks;
        }
    }

    public class Member
    {
        public string FullName { get; set; }
        public string ContactEmail { get; set; }

        public Member(string fullName, string contactEmail)
        {
            FullName = fullName;
            ContactEmail = contactEmail;
        }

        public override string ToString()
        {
            return $"{FullName} ({ContactEmail})";
        }
    }

    public class Job
    {
        public string JobName { get; set; }
        public string Details { get; set; }

        public Job(string jobName, string details)
        {
            JobName = jobName;
            Details = details;
        }

        public override string ToString()
        {
            return $"{JobName}: {Details}";
        }
    }

    class TaskManagerApp
    {
        static void Main()
        {
            Console.Write("Enter Project Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Project Overview: ");
            string overview = Console.ReadLine();

            Console.Write("Enter Lead Name: ");
            string leadName = Console.ReadLine();

            Console.Write("Enter Lead Email: ");
            string leadEmail = Console.ReadLine();

            Member lead = new Member(leadName, leadEmail);
            ProjectPlan project = new ProjectPlan(name, overview, lead);

            Console.WriteLine("\nAdding team members...");
            while (true)
            {
                Console.Write("Enter Member Name (or type 'exit' to stop): ");
                string memberName = Console.ReadLine();
                if (memberName.ToLower() == "exit") break;

                Console.Write("Enter Member Email: ");
                string memberEmail = Console.ReadLine();

                project.AddMember(new Member(memberName, memberEmail));
            }

            Console.WriteLine("\nAssigning tasks...");
            while (true)
            {
                Console.Write("Enter Task Name (or type 'exit' to stop): ");
                string taskName = Console.ReadLine();
                if (taskName.ToLower() == "exit") break;

                Console.Write("Enter Task Details: ");
                string taskDetails = Console.ReadLine();

                project.AssignTask(new Job(taskName, taskDetails));
            }

            Console.WriteLine($"\nProject: {project.Name}");
            Console.WriteLine($"Lead: {project.Lead}");
            Console.WriteLine("\nTeam Members:");
            foreach (var member in project.GetTeam())
            {
                Console.WriteLine(member);
            }

            Console.WriteLine("\nTask List:");
            foreach (var task in project.GetTaskList())
            {
                Console.WriteLine(task);
            }

            Console.WriteLine("\nTask Manager Setup Completed!");
        }
    }
}
