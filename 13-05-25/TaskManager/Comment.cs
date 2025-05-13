using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Comment
    {
        public UserInfo CommentBy { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }

        public Comment(UserInfo user, string commentText)
        {
            CommentBy = user;
            CommentText = commentText;
            CommentDate = DateTime.Now;

        }
        public void DisplayComment()
        {
            Console.WriteLine($" - {CommentBy.UserName}: {CommentText}");
        }
    }
}

