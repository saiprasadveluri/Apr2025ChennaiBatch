using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding
{
    internal class Program
    {
        static List<Resouces> Resouces = new List<Resouces>();
        static void Main()
        {
            Console.WriteLine("Add Resources:");
            AddSampleData();

            Console.WriteLine("\n--- Outstanding Resources ---");
            foreach (var res in Resouces)
            {
                if (res.IsOutstanding())
                {
                    res.PrintDetails();
                }
            }
        }

        static void AddSampleData()
        {
            var p1 = new PaperbackResource
            {
                Title = "C# in Depth",
                Author = "Jon Skeet",
                NumberOfChapters = 18,
                ISBN = "9781617294532",
                NumberOfPages = 900,
                NumberOfBorrowers = 15
            };

            var p2 = new PaperbackResource
            {
                Title = "Java Fundamentals",
                Author = "James Gosling",
                NumberOfChapters = 12,
                ISBN = "1234567890123",
                NumberOfPages = 400,
                NumberOfBorrowers = 8
            };

            var d1 = new DigitalResource
            {
                Title = "ASP.NET Tutorial",
                Author = "Scott Hanselman",
                NumberOfChapters = 10,
                PlayLength = 120,
                FileFormat = "mp4",
                AvgReviewPoints = 4.7
            };

            var d2 = new DigitalResource
            {
                Title = "Docker Basics",
                Author = "Solomon Hykes",
                NumberOfChapters = 7,
                PlayLength = 45,
                FileFormat = "mkv",
                AvgReviewPoints = 4.3
            };

            Resouces.Add(p1);
            Resouces.Add(p2);
            Resouces.Add(d1);
            Resouces.Add(d2);
        }
    }
}
