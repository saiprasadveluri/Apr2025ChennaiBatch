using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public class Restuarant
    {
        public int RestId { get; set; }
        public string RestName { get; set; }
        public string RestLoc { get; set; }
       
        public int MinOrderValue { get; set; }
        public override string ToString()
        {
            return $"RestId :{RestId}- RestName:{RestName}-RestLoc:{RestLoc}-MinOrderValue:{MinOrderValue}";
        }
    }
}
