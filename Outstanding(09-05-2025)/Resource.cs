using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding
{
    internal abstract class Resource
    {
            public string Title { get; }
            public string Author { get; }
            public int ChapterCount { get; }

            //Constructor
            public Resource(string title, string author, int chapterCount)
            {
                Title = title;
                Author = author;
                ChapterCount = chapterCount;
            }
            public abstract bool IsOutstanding();
        
    }
}
