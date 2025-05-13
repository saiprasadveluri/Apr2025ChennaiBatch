using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Comments
    {
        public int CommentId { get; set; } 
        public string Text { get; set; }    
        public User CommentedBy { get; set; } 
        public DateTime CommentedOn { get; set; } 

        public Comment(string text, User commentedBy)
        {
            Text = text;
            CommentedBy = commentedBy;
            CommentedOn = DateTime.Now;
        }

    }
}
