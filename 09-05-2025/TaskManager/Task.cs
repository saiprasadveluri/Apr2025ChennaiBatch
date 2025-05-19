using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Task
    {
        private Comment[] _comments = new Comment[5]; // initial capacity
        private int commentCount = 0;

        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double EstimatedTime { get; set; }
        public Priority Priority { get; set; }
        public Status Status { get; set; }

        public Task(string title, string description)
        {
            Title = title;
            Description = description;
            StartDate = DateTime.Now;
            Status = Status.Open;
        }

        public void AddComment(Comment comment)
        {
            if (commentCount < comments.Length)
            {
                comments[commentCount++] = comment;
            }
            else
            {
                Console.WriteLine("Cannot add more comments. Limit reached.");
            }
        }

        public Comment[] GetComments()
        {
            Comment[] result = new Comment[commentCount];
            for (int i = 0; i < commentCount; i++)
            {
                result[i] = comments[i];
            }
            return result;
        }


    }
}
