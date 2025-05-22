using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryApp.Models
{
    public class Restaurant
    {
        public int RId { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public decimal MinOrderValue { get; set; }
        public User Owner { get; set; }
    }
}
