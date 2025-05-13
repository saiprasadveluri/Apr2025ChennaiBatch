using System;

namespace TaskManager.Models
{
    public class Comment
    {
        private User author;
        private string content;
        private DateTime timestamp;

        public Comment(User author, string content)
        {
            this.author = author;
            this.content = content;
            this.timestamp = DateTime.Now;
        }

        public User GetAuthor() { return author; }
        public string GetContent() { return content; }
        public DateTime GetTimestamp() { return timestamp; }

        public void SetContent(string newContent) { content = newContent; }
    }
}
