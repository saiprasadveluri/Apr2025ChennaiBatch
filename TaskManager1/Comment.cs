using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager1
{
    internal class Comment
    {
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }
        public User Author { get; set; }

        public Comment(string content, DateTime timestamp, User author,
                       string title, string description, DateTime startDate, DateTime endDate,
                       double estimatedTime, string priority, string status,
                       string projectTitle, string projectDescription, User createdBy)
            : base(title, description, startDate, endDate, estimatedTime, priority, status,
                   projectTitle, projectDescription, createdBy)
        {
            Content = content;
            Timestamp = timestamp;
            Author = author;
        }

        public override string ShowDetails()
        {
            return base.ShowDetails() + $"\nType: Comment\nAuthor: {Author?.UserName}\nTime: {Timestamp}\nContent: {Content}";
        }
    }
}
    }
}
