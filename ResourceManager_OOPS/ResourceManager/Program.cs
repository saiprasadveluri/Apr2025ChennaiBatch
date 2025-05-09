using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManager
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Resource[] resources=new Resource[3];
            int curIndex = 0;
            int opt = 0;
            do
            {
                Console.WriteLine("Type Of Resource to create: 1-Paperback, 2-Digital");
                opt = int.Parse(Console.ReadLine());
                switch(opt)
                {
                    case 2:
                        Console.WriteLine("playLength: ");
                        double playLength = double.Parse(Console.ReadLine());
                        Console.WriteLine("File Format: ");
                        string format=Console.ReadLine();
                        Console.WriteLine("reviewAverage: ");
                        double reviewAverage = double.Parse(Console.ReadLine());
                        Console.WriteLine("Title: ");
                        string title = Console.ReadLine();
                        Console.WriteLine("Author: ");
                        string author = Console.ReadLine();
                        Console.WriteLine("Chapter Count: ");
                        int chapters = int.Parse(Console.ReadLine());
                        resources[curIndex] = new Digital(playLength,format,reviewAverage,title,author,chapters);
                        ++curIndex;
                        break;
                    case 1:
                        Console.WriteLine("ISBN: ");
                        string isbn = Console.ReadLine();
                        Console.WriteLine("Page Count: ");
                        int pageCount = int.Parse(Console.ReadLine());
                        Console.WriteLine("borrowCount: ");
                        int borrowCount = int.Parse(Console.ReadLine());
                        Console.WriteLine("Title: ");
                        string booktitle = Console.ReadLine();
                        Console.WriteLine("Author: ");
                        string bookauthor = Console.ReadLine();
                        Console.WriteLine("Chapter Count: ");
                        int bookchapters = int.Parse(Console.ReadLine());
                        resources[curIndex] = new Paperback(isbn, pageCount, borrowCount, booktitle, bookauthor, bookchapters);
                        ++curIndex;
                        break;
                }
                if (curIndex >= resources.Length)
                    break;
            } while (opt != 0);
            //Print the Resources which are outstanding
            foreach(Resource r in resources)
            {
                if(r.IsOutstanding())
                {
                    Console.WriteLine(r.Title + " Is Outstanding");
                }
            }
        }
    }
}
