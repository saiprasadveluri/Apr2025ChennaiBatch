using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    abstract class Task
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int EstimatedTime { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string[] Comments = new string[5];
        private int commentCount = 0;

        public Task(string title, string description, DateTime startDate, DateTime endDate, int estimatedTime, string priority, string status)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstimatedTime = estimatedTime;
            Priority = priority;
            Status = status;
        }

        public void AddComment(string comment)
        {
            if (commentCount < Comments.Length)
            {
                Comments[commentCount++] = comment;
                Console.WriteLine($"Comment added: {comment}");
            }
            else
            {
                Console.WriteLine("Maximum comment limit reached!");
            }
        }

        public void DisplayComments()
        {
            Console.WriteLine($"Comments for Task '{Title}':");
            for (int i = 0; i < commentCount; i++)
            {
                Console.WriteLine($"- {Comments[i]}");
            }
        }

        public abstract void DisplayTaskDetails();
    }

}
