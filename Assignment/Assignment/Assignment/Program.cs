using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Developer dev = new Developer("Alice", "alice@example.com", "pass123");
            QA qa = new QA("Bob", "bob@example.com", "pass456");

            Bug bug = new Bug("Fix login bug", "Login crashes randomly", DateTime.Now, DateTime.Now.AddDays(3), 5, "High", "Open", dev, "Auth.cs", 34, "Critical");

            dev.AssignTask(bug);
            dev.UpdateTaskStatus(bug, "In-Progress");
            dev.AddComment(bug, "Investigating the issue");

            qa.AssignTask(bug);
            qa.UpdateTaskStatus(bug, "Closed");

            Console.WriteLine("Task Management System Running...");
        }
    }
}
