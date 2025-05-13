using System;
using System.Collections.Generic;

namespace TaskManager.Models
{
    public abstract class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int EstimatedTime { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public List<Comment> Comments { get; set; } = new List<Comment>();

        protected Task(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTime = estimatedTime;
            Priority = priority;
            Status = status;
        }

        public void AddComment(User user, string content)
        {
            Comments.Add(new Comment(user, content));
        }
    }
}
