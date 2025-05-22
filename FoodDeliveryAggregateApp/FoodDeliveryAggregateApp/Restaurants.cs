using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Restaurants
    {
        public int RId { get; set; }
        public string RestaurantName {  get; set; }
        public string RLocation {  get; set; }
        public double MinOrderValue {  get; set; }
    }
}
