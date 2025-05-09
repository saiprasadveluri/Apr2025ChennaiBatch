using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManagement
{
    internal class Resources
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int NumberOfChapters { get; set; }

        public Resources(string title, string author, int NumberOfChapters)
        {
            this.Title = title;
            this.Author = author;
            this.NumberOfChapters = NumberOfChapters;
        }
        
        public void AddResources()
        {
            Console.WriteLine("Enter the title:");
            string title = Console.ReadLine();
            Console.WriteLine("Enter the author:");
            string author = Console.ReadLine();
            Console.WriteLine("Enter the number of chapters:");
            int numberOfChapters = int.Parse(Console.ReadLine());
        }
        public string DisplayResources()
        {
            return string.Format($"Title: {Title}\nAuthor: {Author}\nNumber of Chapters: {NumberOfChapters}");
        }
    }
}
