using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelAppWinform.Business
{
    internal class Restaurant
    {
        public string RestaurantName { get; set; }
        public List<MenuItem> MenuList { get; set; } =new List<MenuItem>(); 
        public UserInfo RestOwner { get; set; }
        public Location RestLocation { get; set; }
        public Restaurant()
        {

        }
        public Restaurant(string name,UserInfo restOwner, Location restLocation)
        {
            RestaurantName = name;
            RestOwner = restOwner;
            RestLocation = restLocation;
        }

        public bool AddMenuItem(MenuItem item)
        {
           MenuItem menu= MenuList.Find(m => m.Name == item.Name);
            if (menu != null)
            {
                MenuList.Add(item);
                return true;
            }
            return false;
        }
        
    }
}
