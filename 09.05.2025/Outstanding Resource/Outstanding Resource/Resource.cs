using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding_Resource
{
    abstract class Resource
    {
        public string Title {  get; set; }
        public string Author { get; set; }
        public string NumberOfChapters { get; set; }

        public Resource(string title,string author,string Num_Of_Chapters) 
        { 
            Title = title;
            Author = author;
            NumberOfChapters= Num_Of_Chapters;
        }

        public abstract bool IsOutStanding();
    }

    class Paperback : Resource
    {
        public string ISBNcode { get; set; }
        public int NumberOfPages { get; set; }
        public int NumberOfBorrowers { get; set; }

        public Paperback(string title, string author, string Num_Of_Chaptersstring, 
            string ISBNCode, int numberOfPages, int numberOfBorrowers): base(title, author, Num_Of_Chaptersstring)
        {
            ISBNcode = ISBNCode;
            NumberOfPages = numberOfPages;
            NumberOfBorrowers = numberOfBorrowers;
        }

        public override bool IsOutStanding()
        {
            return NumberOfBorrowers > 10;
        }


    }

    class Digital : Resource
    {
        public string Playlength { get; set; }
        public string FileFormat { get; set; }
        public double AverageReviewPoints {  get; set; }

        public Digital(string title, string author, string Num_Of_Chaptersstring,
            string playlength, string fileFormat, double averageReviewPoints) :
            base(title, author, Num_Of_Chaptersstring)
        {
            Playlength = playlength;
            FileFormat = fileFormat;
            AverageReviewPoints = averageReviewPoints;
        }

        public override bool IsOutStanding()
        {
            return AverageReviewPoints > 4.5;
        }
    }



}
