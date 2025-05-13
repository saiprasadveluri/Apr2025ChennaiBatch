using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class QA : User, ITaskActions
    {
        public QA(string userName, string email, string password) : base(userName, email, password, "QA") { }

        public void AssignTask(Task task)
        {
            task.AssignedUser = this;
        }

        public void UpdateTaskStatus(Task task, string newStatus)
        {
            task.Status = newStatus;
        }

        public void AddComment(Task task, string comment)
        {
            task.AddComment(comment);
        }
    }
}
