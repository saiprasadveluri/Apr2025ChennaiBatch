using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Orders
    {
        public int OId {  get; set; }
        public string OName { get; set; }
        public string DishType {  get; set; }
        public double Price {  get; set; }
        public double ValuePerUnit {  get; set; }

    }
}
