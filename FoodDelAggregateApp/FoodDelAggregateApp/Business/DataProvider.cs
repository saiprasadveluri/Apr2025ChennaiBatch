using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelAggregateApp.Business
{
    public class DataProvider
    {
        private DataProvider()
        {
            _users = new List<Users>();
            _locations = new List<Location>();
            _restaurants = new List<Restaurant>();
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
        private List<Users> _users;
        private List<Restaurant> _restaurants;

        //properties
        public List<Location> Locations { get { return _locations; } }
        public List<Users> User { get { return _users; } }
        public List<Restaurant> Rest { get { return _restaurants; } }
        public void AddLocation(Location loc)
        {
            Locations.Add(loc);
        }
        public List<Location> GetAllLocations()
        {
            return Locations;
        }

        public void AddRestaurant(Restaurant res)
        {
            Rest.Add(res);
        }
        public List<Restaurant> GetAllRestaurants()
        {
            return Rest;
        }
    }
}
