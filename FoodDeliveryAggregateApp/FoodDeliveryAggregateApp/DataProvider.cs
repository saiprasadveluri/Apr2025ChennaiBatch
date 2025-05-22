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
            _locations = new List<Locations>();
            _restaurants = new List<Restaurants>();
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
        private List<Locations> _locations;
        private List<Restaurants> _restaurants;
        private List<Orders> _orders;
   
        //Properties.
        public List<Locations> Location { get { return _locations; } }
        public List<Restaurants> Restaurant{ get { return _restaurants; } }
        public List<Orders> Order { get { return _orders; } }

        public List<Locations> GetAllLocations()
        {
            return Location;
        }

        public void NewLocations(Locations loc)
        {
            Location.Add(loc);
        }

        public List<Restaurants> GetAllRestauarnts()
        {
            return Restaurant;
        }
        public void AddRestaurant(Restaurants rest)
        {
           Restaurant.Add(rest);
        }

    }
}