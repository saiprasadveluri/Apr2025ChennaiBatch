using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelForms.Lists
{
    public class DataProvider
    {
        private DataProvider()
        {
            _locations = new List<Location>();
            _restlist = new List<Restaurant>();
            _menu = new List<Menu>(); 
            _orders = new List<Orders>();
            _users = new List<Users>();

        }
        private static DataProvider _instance;
        public static DataProvider Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new DataProvider();
                return _instance;
            }
        }
        private List<Location> _locations;
        private List<Restaurant> _restlist;
        private List<Menu> _menu;
        private List<Orders> _orders;
        private List<Users> _users;
        //Properties.
        public List<Location> Locations { get { return _locations; } }
        public List<Restaurant> Resturants { get { return _restlist; } }
        public List<Orders>Orders { get { return _orders; } }
        public List<Menu> Menus { get { return _menu; } }
        public List<Users> Users
        {
            get { return _users; }
        }
        public List<Location> GetAllLocations()
        {
            return _instance.Locations;
        }
        public void AddLocation(Location loc)
        {
            _instance.Locations.Add(loc);
        }
        public List<Restaurant> GetAllRestaurants()
        {
            return _instance.Resturants;
        }
        public void AddRestaurant(Restaurant rest)
        {
            _instance.Resturants.Add(rest);
        }
    }
}
