using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace outstanding
{
    internal class Paperback:Resources
    {
        private Resources resources { get; set; }

        public string ISBNCode {  get; }
        public int PageCount  {  get;}
        public int BorrowCount{  get; }
        const int borrow_threshold = 10;

        public Paperback(string isbncode, int pagecount, int borrowcount,string title,string author,int chaptercount):base(title,author,chaptercount) 
        {
            ISBNCode = isbncode;
            PageCount = pagecount;
            BorrowCount = borrowcount;
        }
        public string GetPaperBackResources()
        {
            return string.Format($"{ISBNCode}--{PageCount}--{BorrowCount}");
        }

        public override bool IsOutstanding()
        {
            return BorrowCount >= borrow_threshold;

        }

        
    }
}
