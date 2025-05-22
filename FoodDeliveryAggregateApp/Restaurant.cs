using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Restaurant
    {
        public int ID { get; set; }

        public string RestaurantName { get; set; }

        public int Location { get; set; }

        public double MinimumOrderValue { get; set; }


    }
}
