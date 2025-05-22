using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryWindowForms
{
    public class Orders
    {
        public int OId {  get; set; }

        public string OName { get; set; }

        public string Dishtype {  get; set; }

        public int price {  get; set; }

        public int ValueforUnit { get; set; }
    }
}
