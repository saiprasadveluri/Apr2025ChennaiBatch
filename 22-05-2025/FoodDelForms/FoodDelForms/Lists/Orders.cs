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
    public class Orders
    {
        public string RestDetails {  get; set; }
        public string CustDetails {  get; set; }
        public string Items {  get; set; }
        public double Price {  get; set; }
        public override string ToString()
        {
            return $"RestDetails: {RestDetails} - CustDetails: {CustDetails}" +
                $" -Items:{Items} - TotalPrice: {Price} ";
        }
    }
}
