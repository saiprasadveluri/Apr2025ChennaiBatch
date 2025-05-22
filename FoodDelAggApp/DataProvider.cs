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
            _users = new List<Users>();
            _locations = new List<Location>();
            _restuarant = new List<Restuarant>();
           
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
        private List<Restuarant> _restuarant;
        private List<Users> _users;
        

        //properties
        public List<Location> Locations { get { return _locations; } }
        
        public List<Users> User { get { return _users; } }

        public List<Restuarant> Rest { get { return _restuarant; } }
        public void AddLocation(Location loc)
        {
            _instance.Locations.Add(loc);
        }
        public List<Location> GetAllLocations()
        {
            return _instance.Locations;
        }
        public void AddRestuarant(Restuarant Res)
        {
            _instance.Rest.Add(Res);
        }
        public List<Restuarant> GetAllRestuarant()
        {
            return _instance.Rest;
        }
    }
    
}
