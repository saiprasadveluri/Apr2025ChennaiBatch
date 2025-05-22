using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryWindowForms
{
    public class DataProvider
    {
        private DataProvider()
        {
            _locations = new List<Locations>();
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
        private List<Locations> _locations;
        private List<Restaurant> _restaurant;
        private List<Orders> _orders;
      
        //Properties.
        public List<Locations> Location { get { return _locations; } }
        public List<Restaurant> Restaurant { get { return _restaurant; } }
        public List<Orders> orders{ get { return _orders; } }
        
        public List<Locations>GetAllLocations()
        {
            return Location;
        }
        public void NewLocations(Locations loc)
        {
            Location.Add(loc);
        }
        public List<Restaurant> GetAllRestaurants()
        {
            return Restaurant;
        }
        public void AddRestaurant(Restaurant res)
        {
            Restaurant.Add(res);
        }
    }
}
    

