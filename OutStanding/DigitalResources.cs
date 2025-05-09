using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ResourceManager
{
    internal class Digital : Resource
    {
        public double PlayLength { get; }
        public string FileFormat { get; }
        public double AverageReviewPoints { get; }
        private const double REVIEWPOINTS_THRESHOLD = 4.5;
        public Digital(double playLength, string fileFormat, double reviewAverage,
            string title, string author, int chapterCount) : base(title, author, chapterCount)
        {
            PlayLength = playLength;
            FileFormat = fileFormat;
            AverageReviewPoints = reviewAverage;
        }

        public override bool IsOutstanding()
        {
            return AverageReviewPoints >= REVIEWPOINTS_THRESHOLD;
        }
    }
}