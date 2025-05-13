using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projectmanager
{
    public class comment
    {
        public string Text { get; set; }
        public User Author { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.Now;
    }
}
