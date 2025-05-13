using System;
using System.Collections.Generic;
namespace TaskManager.Models
{
    public enum Priority
    {
        Low,
        Medium,
        High,
        Critical
    }
    public enum TaskStatus
    {
        Open,
        InProgress,
        OnHold,
        Resolved,
        Closed
    }
    public abstract class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int EstimatedTime { get; set; }
        public Priority Priority { get; set; }
        public TaskStatus Status { get; set; }
        public User AssignedTo { get; set; }
        public List<Comment> Comments { get; set; }
        public Project Project { get; set; }
        protected Task(string title, string description, DateTime startDate,
                      DateTime endDate, int estimatedTime, Priority priority, Project project)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTime = estimatedTime;
            Priority = priority;
            Status = TaskStatus.Open;
            Comments = new List<Comment>();
            Project = project;
        }
        public void AddComment(User user, string text)
        {
            Comments.Add(new Comment(user, text));
        }
        public abstract void UpdateStatus(TaskStatus newStatus, User user);
    }
}