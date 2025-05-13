using System;

namespace TaskManager.Models

{
    public class Comment
    {
        public User Author { get; set; }
        public string Text { get; set; }
        public DateTime Timestamp { get; set; }
        public Comment(User author, string text)

        {

            Author = author;
            Text = text;
            Timestamp = DateTime.Now;
        }
    }
}
