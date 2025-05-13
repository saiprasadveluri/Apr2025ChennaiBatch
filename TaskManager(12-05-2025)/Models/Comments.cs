using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagement.Models
{
    internal class Comments
    {
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime Date { get; private set; }

        public Comments(string content, string author)
        {
            Content = content;
            Author = author;
            Date = DateTime.Now;
        }

        public override string ToString()
        {
            return $"{Date:G} | {Author}: {Content}";
        }
    }
}