using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    interface ITaskActions
    {
        void UpdateTaskStatus(Task task, string newStatus);
        void AddComment(Task task, string comment);
    }
}
