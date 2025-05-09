using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManagement
{
    internal class PaperBook:Resources
    {
        public int ISBN { get; set; }
        public int NoOfPages { get; set; }
        public int NoOfBorrowers { get; set; }
        public Resources pResources { get; set; }

        public PaperBook(int isbn, int noOfPages, int noOfBorrowers,Resources resources) : base(resources.Title,resources.Author,resources.NumberOfChapters)
        {
            this.ISBN = isbn;
            this.NoOfPages = noOfPages;
            this.NoOfBorrowers = noOfBorrowers;
            this.pResources = resources;
        }
        public void AddPaperBook()
        {
            Console.WriteLine("Enter the ISBN:");
            ISBN = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the number of pages:");
            NoOfPages = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the number of borrowers:");
            NoOfBorrowers = int.Parse(Console.ReadLine());
        }
        public string GetPaper()
        {
            return $"{pResources.DisplayResources()}\nISBN: {ISBN}\nNo. of Pages: {NoOfPages}\nNo. of Borrowers: {NoOfBorrowers}";
        }
    }
}
