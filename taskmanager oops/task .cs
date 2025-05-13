using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal interface ITaskActions
    {
        void AssignIssue(TaskItem workItem);
        void ChangeIssueStatus(TaskItem workItem, string newStatus);
        void LeaveComment(TaskItem workItem, string comment);
    }
}
