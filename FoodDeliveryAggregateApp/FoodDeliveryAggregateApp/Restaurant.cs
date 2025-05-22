using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public decimal MinimumOrderValue { get; set; }
        public List<MenuItem> Menu { get; set; }

        public Restaurant(int id, string name, string location, decimal minOrder)
        {
            Id = id;
            Name = name;
            Location = location;
            MinimumOrderValue = minOrder;
            Menu = new List<MenuItem>();
        }
    }
}
