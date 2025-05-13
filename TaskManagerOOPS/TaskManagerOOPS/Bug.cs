using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class Bug:Task
    {
        public string SrcFileName {  get; set; }
        public int LineNumber { get; set; }
        public int Severity { get; set; }
    }
}
