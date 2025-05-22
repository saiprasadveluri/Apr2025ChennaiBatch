using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelAppWinform.Business
{
    internal class Order
    {
        public Restaurant Restaurant { get; set; }
        public List<OrderMenuEntry> OrderedMenuItem { get; set; }
        public UserInfo OrderBy { get; set; }
        public Order(Restaurant restaurant, List<OrderMenuEntry> orderedMenuItem, UserInfo orderBy)
        {
            Restaurant = restaurant;
            OrderedMenuItem = orderedMenuItem;
            OrderBy = orderBy;
        }
    }
}
