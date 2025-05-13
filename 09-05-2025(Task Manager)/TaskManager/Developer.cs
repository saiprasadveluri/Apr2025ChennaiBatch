using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Developer : User, ITaskActions
{
    public Developer(string userName, string email, string password)
        : base(userName, email, password, "Developer") { }

    public void UpdateTaskStatus(Task task, string newStatus)
    {
        task.Status = newStatus;
        Console.WriteLine($"Developer updated task '{task.Title}' to '{newStatus}'");
    }

    public void AddComment(Task task, string comment)
    {
        task.AddComment(comment);
    }

    public void AssignTaskToQA(Task task, QA qa)
    {
        Console.WriteLine($"Task '{task.Title}' assigned to QA '{qa.UserName}'");
    }
}

}
