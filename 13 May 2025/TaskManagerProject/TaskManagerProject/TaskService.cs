using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    public class TaskService
    {
        private List<Task> _tasks = new List<Task>();

        public void AddTask(Task task)
        {
            _tasks.Add(task);
        }

        public void UpdateTaskStatus(Task task, TaskStatus newStatus)
        {
            task.Status = newStatus;
        }

        public void AssignTask(Task task, string assignedTo)
        {
            task.AssignedTo = assignedTo;
        }
    }
}
