
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;
using TaskManagement.Enums;
using TaskManager;

namespace TaskManagement.Models
{
    internal class Tasks
    {
        public string Title;
        public string Description;
        public DateTime StartDate;
        public DateTime EndDate;
        public int EstimatedTime;
        public Priority PriorityLevel;
        public TaskStatus Status;
        public User AssignedTo;
        public Comments[] Comments;

        // Shared constructor for common task fields
        public Tasks(string title, string description, DateTime startDate, DateTime endDate,
                         int estimatedTime, Priority priorityLevel, TaskStatus status,
                         User assignedTo, int maxComments)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTime = estimatedTime;
            PriorityLevel = priorityLevel;
            Status = status;
            AssignedTo = assignedTo;
            Comments = new Comments[maxComments];
        }

        public virtual void Display()
        {
            Console.WriteLine($"Task: {Title}");
            Console.WriteLine($"Assigned To: {AssignedTo?.UserName ?? "Unassigned"}");
            Console.WriteLine($"Priority: {PriorityLevel}, Status: {Status}");
        }
    }
}
