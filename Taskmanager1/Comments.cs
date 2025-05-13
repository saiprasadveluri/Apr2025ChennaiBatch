using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskmanager1
{
    internal class Comments
    {
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }
        public Users Author { get; set; }

        public Comments(string content, DateTime timestamp, Users author,
                       string title, string description, DateTime startDate, DateTime endDate,
                       double estimatedTime, string priority, string status,
                       string projectTitle, string projectDescription, Users createdBy)
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
