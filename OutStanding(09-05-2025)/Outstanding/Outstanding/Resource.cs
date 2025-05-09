using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding
{
    internal abstract class Resource
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int chapterCount { get; set; }
        public Resource(string title,string author,int chaptercount) 
        { 
            Title = title;
            Author = author;
            chapterCount= chaptercount;

        }
           public abstract bool IsOutstanding();
    }
}
