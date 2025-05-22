using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryWinApp
{
    public class Order
    {
        public int orderId {  get; set; }
        public string orderName { get; set; }
        public string dishType {  get; set; }
        public int price { get; set; }
        public int quantity { get; set; }

    }
}
