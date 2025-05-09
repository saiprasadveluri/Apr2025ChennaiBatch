using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SqlServer.Server;

namespace outstanding
{
    internal abstract class Resources
    {
        public string Title { get; }
        public string Author { get; }
        public int ChapterCount {  get;  }

        public Resources(string title,string author,int chaptercount)
        {
            Title = title;
            Author = author;
            ChapterCount = chaptercount;

        }
        public abstract bool IsOutstanding();
       










    }
}
