using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager1
{
    internal class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double EstimatedTimeInHours { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string ProjectTitle { get; set; }
        public string ProjectDescription { get; set; }
        public User CreatedBy { get; set; }
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public User AssignedTo { get; private set; }

        public Task(string title, string description, DateTime startDate, DateTime endDate,
                    double estimatedTime, string priority, string status,
                    string projectTitle, string projectDescription, User createdBy)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTimeInHours = estimatedTime;
            Priority = priority;
            Status = status;
            ProjectTitle = projectTitle;
            ProjectDescription = projectDescription;
            CreatedBy = createdBy;
        }

        public void AssignTask(User assignee)
        {
            if (assignee.Role == "Developer" || assignee.Role == "QA")
            {
                AssignedTo = assignee;
                Console.WriteLine($"Task '{Title}' assigned to {assignee.UserName}.");
            }
            else
            {
                Console.WriteLine("Error: Only Developer or QA can be assigned to a task.");
            }
        }

        public void UpdateStatus(string newStatus, User user)
        {
            if (user.Role == "Developer" || user.Role == "QA")
            {
                Status = newStatus;
                Console.WriteLine($"Task '{Title}' status updated to {newStatus} by {user.UserName}");
            }
            else
            {
                Console.WriteLine("Error: Only Developer or QA can update task status.");
            }
        }

        public void AddComment(Comment comment)
        {
            Comments.Add(comment);
            Console.WriteLine($"Comment added by {comment.Author?.UserName} on task '{Title}'.");
        }

        public virtual string ShowDetails()
        {
            return $"Task: {Title}\nDescription: {Description}\nPriority: {Priority}\nStatus: {Status}\nAssigned Project: {ProjectTitle}\nCreated By: {CreatedBy?.UserName}";
        }
    }
}
    }
}
