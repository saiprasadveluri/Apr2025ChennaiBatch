using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int EstimatedTime { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string[] Comments { get; set; }
        public User AssignedUser { get; set; }

        public Task(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status, User assignedUser)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTime = estimatedTime;
            Priority = priority;
            Status = status;
            Comments = new string[10];
            AssignedUser = assignedUser;
        }

        public void AddComment(string comment)
        {
            for (int i = 0; i < Comments.Length; i++)
            {
                if (Comments[i] == null)
                {
                    Comments[i] = comment;
                    break;
                }
            }
        }
    }
}
