using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding
{
    internal class Paperback:Resource
    {
        public string ISBNCode { get; }
        public int PageCount { get; }
        public int BorrowCount { get; }

        const int BORROW_THRESHOLD = 10;

        //Constructor
        public Paperback(string iSBNCode, int pageCount, int borrowCount,
            string title, string author, int chapterCount) : base(title, author, chapterCount)
        {
            ISBNCode = iSBNCode;
            PageCount = pageCount;
            BorrowCount = borrowCount;
        }

        public override bool IsOutstanding()
        {
            return BorrowCount >= BORROW_THRESHOLD;
        }
    }
}

