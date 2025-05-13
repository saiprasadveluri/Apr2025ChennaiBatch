using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projectmanager
{
   public class project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public User ProjectManager { get; set; }
        public List<User> TeamMembers { get; set; } = new();
        public List<TaskBase> Tasks { get; set; } = new();
    }
}
