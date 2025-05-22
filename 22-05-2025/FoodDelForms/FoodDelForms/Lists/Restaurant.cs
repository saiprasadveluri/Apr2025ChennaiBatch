using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.StartPanel;

namespace FoodDelForms.Lists
{
    public class Restaurant
    {
        public int RestId { get; set; }
        public string RestName { get; set; }
        public string RLocation { get; set; }
        public double MinOrdVal { get; set; }
        public string[] Menu {  get; set; }

        public override string ToString()
        {
            return $"Rest Id: {RestId} - RestName: {RestName} -" +
                $"Location:{RLocation} -Orderval:{MinOrdVal} ";
        }
        public string GetEntry()
        {
            return $"{RestId}- {RestName} -{RLocation}-{MinOrdVal}";
        }
    }
    
}
