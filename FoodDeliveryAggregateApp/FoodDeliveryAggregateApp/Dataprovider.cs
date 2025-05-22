using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public class Dataprovider
    {
        private Dataprovider()
        {
            _locations = new List<Location>();
            _Restuarant = new List<Restuarant>();
            _Orders = new List<Orders>();
            
        }
        private static Dataprovider _instance;
        public static Dataprovider Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new Dataprovider();
                return _instance;
            }
        }
        private List<Location> _locations;
        private List<Restuarant> _Restuarant;
        private List<Orders> _Orders;
       
        //Properties.
        public List<Location> Locations { get { return _locations; } }
        public List<Restuarant> Restaurants { get { return _Restuarant; } }
        public List<Orders> Order { get { return _Orders; } }
        public  List <Location> GetAllLocations()
        {
            return Locations;
        }
        public List <Restuarant> GetAllRestaurants()
        {
            return Restaurants;
        }
         public void NewLocations(Location loc)
        {
            Locations.Add(loc);
        }
        public void NewRestaurant(Restuarant Res)
        {
            Restaurants.Add(Res);
        }


    }

}

