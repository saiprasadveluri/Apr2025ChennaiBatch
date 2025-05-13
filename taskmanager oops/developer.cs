using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Developer : User, ITaskActions
    {
        public Developer(string userName, string email, string password)
            : base(userName, email, password, "Developer") { }

        public void AssignIssue(TaskItem workItem)
        {
            workItem.AssignedUser = this;
        }

        public void ChangeIssueStatus(TaskItem workItem, string newStatus)
        {
            workItem.Status = newStatus;
        }

        public void LeaveComment(TaskItem workItem, string comment)
        {
            workItem.AddComment(comment);
        }
    }
}
