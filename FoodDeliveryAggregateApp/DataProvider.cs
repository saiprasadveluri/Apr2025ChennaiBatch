using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class DataProvider
    {

        private DataProvider()
        {
            _location = new List<Location>();
            _restaurant = new List<Restaurant>();
            _orders = new List<Orders>();

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
        private List<Location> _location;
        private List<Restaurant> _restaurant;
        private List<Orders> _orders;
        //Properties.
        public List<Location> Locations { get { return _location; } }
        public List<Restaurant> Restaurants { get { return _restaurant; } }
        public List<Orders> Order { get { return _orders; } }

        public List<Location> GetAllLocations()
        {
            return Locations;
        }
        public void NewLocation(Location loc)
        {
            Locations.Add(loc);
        }

        public List<Restaurant> GetAllRestaurant()
        {
            return Restaurants;
        }
        public void NewRestaurant(Restaurant res)
        {
            Restaurants.Add(res);
        }
    }
}

