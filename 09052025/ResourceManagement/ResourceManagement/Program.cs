using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManagement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Resources resource = new Resources("Csharp","Adnan",5);
            //PaperBook paperBook = new PaperBook(123456789, 200, 10,resource);
            //DigitalBook digitalBook = new DigitalBook(20, "PDF", 4, resource);
            //resource.AddResources();
            //Console.WriteLine(paperBook.GetPaper());
            //resource.DisplayResources();

            Console.WriteLine(DigitalBook.GetDigital());
            List<Resources> resources = new List<Resources>();

            resources.Add(new PaperBook
            {
                Title = "C# Programming",
                Author = "Sai",
                NumberOfChapters = 10,
                ISBN = "983-884-993",
                NumberOfPages = 300,
                NumberOfBorrowers = 7
            });


            resources.Add(new PaperBook
            {
                Title = "Java Programming",
                Author = "Prasad",
                NumberOfChapters = 10,
                ISBN = "983-884-993",
                NumberOfPages = 250,
                NumberOfBorrowers = 12
            });


            resources.Add(new DigitalBook
            {
                Title = "Python Programming",
                Author = "Durga",
                NumberOfChapters = 15,
                PlayLength = 2,
                FileFormat = "MP4",
                AverageReviewPoints = 4.3
            });


            resources.Add(new DigitalBook
            {
                Title = "JavaScript Programming",
                Author = "Srinivas",
                NumberOfChapters = 20,
                PlayLength = 3,
                FileFormat = "MP4",
                AverageReviewPoints = 4.5
            });
            {
                Title = "Ruby Programming",
                Author = "Srinivas",
                NumberOfChapters = 15,
                PlayLength = 5,
                FileFormat = "PDF",
                AverageReviewPoints = 4.7
            });


            Console.WriteLine("Outstanding Resources:");
            foreach (var resource in resources)
            {
                if (resource.IsOutstanding())
                {
                    resource.Display();
                    Console.WriteLine("-----------------------------------------------------");
                }
            }
            //Console.WriteLine(digitalBook.GetDigital() == null ? "DigitalBook is null" : "DigitalBook is initialized");
        }
    }
}
