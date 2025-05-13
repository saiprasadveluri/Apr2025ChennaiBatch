using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal interface ITaskActions
    {
        void AssignTask(Task task);
        void UpdateTaskStatus(Task task, string newStatus);
        void AddComment(Task task, string comment);
    }
}
