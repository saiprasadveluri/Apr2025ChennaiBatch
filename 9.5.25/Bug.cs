using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projectmanager
{
    public class Bug : TaskBase
    {
        public string SourceFileName { get; set; }
        public int LineNumber { get; set; }
        public string Severity { get; set; }

        public override void DisplayDetails()
        {
            Console.WriteLine($"[BUG] {Title}, Assigned to: {AssignedTo?.UserName}, Severity: {Severity}");
        }
    }
}
