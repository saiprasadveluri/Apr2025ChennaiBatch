using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace outstanding
{
    internal class DigitalResource:Resources
    {
        public double PlayLength {  get; }
        public string FileFormat {  get; }
       public Double AverageReviewPoints {  get; }
        private const double ReviewPoints_Threshold = 4.5;

        public DigitalResource(double playlength,string filetype,double avgreviewrating,string title,string author,int chaptercount):base(title,author,chaptercount) 
        {
            PlayLength = playlength;
            FileFormat = filetype; 
            AverageReviewPoints = avgreviewrating;

        }

        public override bool IsOutstanding()
        {
            return AverageReviewPoints >= ReviewPoints_Threshold;
        }




    }
}
