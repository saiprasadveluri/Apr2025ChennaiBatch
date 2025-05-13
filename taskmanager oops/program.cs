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
            Developer developer1 = new Developer("Aarushi", "aarushi@example.com", "dev@123");
            QA tester1 = new QA("Rohan", "rohan@example.com", "test@456");

            Bug issue1 = new Bug(
                "Resolve login crash", 
                "App crashes intermittently during login", 
                DateTime.Now, 
                DateTime.Now.AddDays(3), 
                5, 
                "High", 
                "Open", 
                developer1, 
                "LoginService.cs", 
                34, 
                "Severe"
            );

            developer1.AssignIssue(issue1);
            developer1.ChangeIssueStatus(issue1, "In-Progress");
            developer1.LeaveComment(issue1, "Analyzing root cause");

            tester1.AssignIssue(issue1);
            tester1.ChangeIssueStatus(issue1, "Closed");

            Console.WriteLine("🛠️ Task Tracker is live...");
        }
    }
}
