using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projectmanager
{
    public class NewFeature : TaskBase
    {
        public string ModuleName { get; set; }
        public string ChangeRequestNumber { get; set; }

        public override void DisplayDetails()
        {
            Console.WriteLine($"[FEATURE] {Title}, Module: {ModuleName}, Assigned to: {AssignedTo?.UserName}");
        }
    }
}
