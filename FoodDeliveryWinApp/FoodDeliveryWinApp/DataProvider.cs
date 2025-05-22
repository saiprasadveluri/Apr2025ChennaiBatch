using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryWinApp
{
   public class DataProvider
    {
        private DataProvider()
        {
            _locations = new List<Location>();
            _restaurant = new List<Restaurant>();
            _order = new List<Order>();
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
        private List<Restaurant> _restaurant;
        private List<Order> _order;
        //Properties.
        public List<Location> Location { get { return _locations; } }
        public List<Restaurant> Restaurant { get { return _restaurant; } }
        public List<Order> Order { get { return _order; } }
        public List<Location>GetAllLocations()
        {
            return _locations;
        }
        public void NewLocation(Location location)
        {
            Location.Add(location);
        }
       
}

}