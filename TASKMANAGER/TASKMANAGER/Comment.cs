using System;

namespace TaskManager.Models
{
    public class Comment
    {
        public User Author { get; set; }
        public string Content { get; set; }
        public DateTime Timestamp { get; set; }

        public Comment(User author, string content)
        {
            Author = author;
            Content = content;
            Timestamp = DateTime.Now;
        }
    }
}

