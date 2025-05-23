using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelApp
{
    public class Restaurant
    {
        public int RId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public int MinOrderValue { get; set; }
        public int OwnerId { get; set; }
    }
}
