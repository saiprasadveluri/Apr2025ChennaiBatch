using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    public class NewFeature : Task
    {
        public string ModuleName { get; set; }
        public int ChangeRequestNumber { get; set; }
    }
}
