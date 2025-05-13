using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class Comment
    {
        public string CommentTitle {  get; set; }
        public string CommentContent { get; set; }
        public int TaskId { get; set; }
        public int CommentedBy { get; set; }
    }
}
