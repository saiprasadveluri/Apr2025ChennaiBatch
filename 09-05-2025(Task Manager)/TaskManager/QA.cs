using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class QA : User, ITaskActions
    {
        public QA(string userName, string email, string password)
            : base(userName, email, password, "QA") { }

        public void UpdateTaskStatus(Task task, string newStatus)
        {
            task.Status = newStatus;
            Console.WriteLine($"QA updated task '{task.Title}' to '{newStatus}'");
        }

        public void AddComment(Task task, string comment)
        {
            task.AddComment(comment);
        }
    }
}
