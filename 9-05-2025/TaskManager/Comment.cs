using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Comment
    {
        public User CommentedBy { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }

        public Comment(User user, string commentText)
        {
            CommentedBy = user;
            CommentText = commentText;
            CommentDate = DateTime.Now;

        }
        public void DisplayComment()
        {
            Console.WriteLine($" - {CommentedBy.UserName}: {CommentText}");
        }
    }
}
