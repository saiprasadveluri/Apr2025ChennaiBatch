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
    public  class Menu
    {
        public  int MenuId {  get; set; }
        public string MenuName { get; set; }
        public string DishType {  get; set; }
        public int Price {  get; set; }
        public int Qty {  get; set; }

        public override string ToString()
        {
            return $"Menu Id: {MenuId} -MenuName: {MenuName} -DishName:{DishType} " +
                $"-Price: {Price} -Quantity: {Qty}";

        }
    }
}
