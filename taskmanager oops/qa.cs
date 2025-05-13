using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Tester : User, ITaskActions
    {
        public Tester(string userName, string email, string password)
            : base(userName, email, password, "Tester") { }

        public void AssignIssue(TaskItem workItem)
        {
            workItem.AssignedUser = this;
        }

        public void ChangeIssueStatus(TaskItem workItem, string updatedStatus)
        {
            workItem.Status = updatedStatus;
        }

        public void LeaveComment(TaskItem workItem, string commentText)
        {
            workItem.AddComment(commentText);
        }
    }
}
