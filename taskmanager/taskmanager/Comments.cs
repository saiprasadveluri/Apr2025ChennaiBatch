using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskmanager
{
    internal class Comments
    {
        public User Author { get; set; }
        public string Text { get; set; }
        public DateTime Timestamp { get; set; }
        public Comments(User author, string text)

        {

            Author = author;
            Text = text;
            Timestamp = DateTime.Now;
        }
    }
}

