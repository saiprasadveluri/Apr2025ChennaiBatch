using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManagement
{
    internal class DigitalBook : Resources
    {
        public int playlength { get; set; }
        public string file_format { get; set; }
        public int AvgReview { get; set; }

        public Resources dResources { get; set; }
        public PaperBook pb { get; }

        public DigitalBook(int playlength, string file_format, int avgReview, Resources resources) : base(resources.Title, resources.Author, resources.NumberOfChapters)
        {
            this.playlength = playlength;
            this.file_format = file_format;
            this.AvgReview = avgReview;
            this.dResources = resources;
        }
        public void AddDigitalBook()
        {
            Console.WriteLine("Enter the play length:");
            playlength = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter the file format:");
            file_format = Console.ReadLine();
            Console.WriteLine("Enter the average review:");
            AvgReview = int.Parse(Console.ReadLine());
        }
        public string GetDigital()
        {
            return $"{pb.GetPaper()}\nPlay Length: {playlength}\nFile Format: {file_format}\nAverage Review: {AvgReview}";
        }

    }
}
