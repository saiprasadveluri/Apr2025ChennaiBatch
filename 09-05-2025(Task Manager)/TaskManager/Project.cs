using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Project
    {
    public string Title { get; set; }
    public string Description { get; set; }
    public User ProjectManager { get; set; }
    public User[] TeamMembers;
    public Task[] Tasks;
    private int taskCount = 0;

    public Project(string title, string description, User projectManager, int maxTasks)
    {
        Title = title;
        Description = description;
        ProjectManager = projectManager;
        TeamMembers = new User[10]; // Max team members
        Tasks = new Task[maxTasks]; // Array storage for tasks
    }

    public void AddTask(Task task)
    {
        if (taskCount < Tasks.Length)
        {
            Tasks[taskCount++] = task;
            Console.WriteLine($"Task '{task.Title}' added to project '{Title}'");
        }
        else
        {
            Console.WriteLine("Task limit reached! Cannot add more tasks.");
        }
    }
}
}
