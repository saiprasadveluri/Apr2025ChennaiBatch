using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Restuarant
    {
        public int Id { get; set; }
        public string RestName { get; set; }
        public int Location {  get; set; }
        public double MinimumOrderValue {  get; set; }

    }
}
