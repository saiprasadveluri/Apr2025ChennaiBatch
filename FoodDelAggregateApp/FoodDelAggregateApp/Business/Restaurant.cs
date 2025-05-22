using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelAggregateApp.Business
{
    public class Restaurant
    {
        public int RestId {  get; set; }
        public string RestName {  get; set; }
        public int Location {  get; set; }
        public int MinOrderVal {  get; set; }
        public override string ToString()
        {
            return $"RestId: {RestId} - RestName: {RestName} - Location: {Location} - MinOrderVal:{MinOrderVal}";
        }
    }
}
