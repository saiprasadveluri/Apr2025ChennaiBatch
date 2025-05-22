using FoodDelAppWinform.Business;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;


namespace FoodDelAppWinform.Data
{
    internal class DataProvider
    {
        private const string USER_FILE_NAME = "UserInfo.txt";
        private const string RESTAURANT_FILE_NAME = "RestInfo.txt";
        private const string ORDER_FILE_NAME = "Order.txt";
        private const string LOCATION_FILE_NAME = "Location.txt";

        private static DataProvider _dataProvider;
        List<UserInfo> _userInfo;
        List<Restaurant> _restaurants;
        List<Order> _orders;
        List<Location> _location;
        private DataProvider()
        {
            _userInfo=new List<UserInfo>();
            _restaurants = new List<Restaurant>();
            _orders= new List<Order>();
            _location=new List<Location>();
        }
        public static DataProvider Instance
        {
            get { 
                if(_dataProvider == null)
                    _dataProvider = new DataProvider();
                return _dataProvider;
            }
        }
        
        //Load and Save()
        public void SaveToFile()
        {
            SaveUserDetails(USER_FILE_NAME);
            SaveRestaurantDetails(RESTAURANT_FILE_NAME);
            SaveOrderDetails(ORDER_FILE_NAME);
            SaveLocationDetails(LOCATION_FILE_NAME);
        }

        public void LoadData()
        {
            LoadUserDetails(USER_FILE_NAME);
            LoadRestaurantDetails(RESTAURANT_FILE_NAME);
            LoadOrderDetails(ORDER_FILE_NAME);
            LoadLocations(LOCATION_FILE_NAME);
        }

        private void LoadLocations(string filename)
        {
            if (!File.Exists(filename))
            {
                return;
            }
            StreamReader streamReader = new StreamReader(filename);
            string JSonString = streamReader.ReadToEnd();
            streamReader.Close();
            _location = JsonSerializer.Deserialize<List<Location>>(JSonString);
        }
        private void LoadUserDetails(string filename)
        {
            if (!File.Exists(filename))
            {
                return;
            }
            StreamReader streamReader = new StreamReader(filename);
            string JSonString=streamReader.ReadToEnd();
            streamReader.Close();
            _userInfo=JsonSerializer.Deserialize<List<UserInfo>>(JSonString);
        }

        private void LoadRestaurantDetails(string filename)
        {
            if (!File.Exists(filename))
            {
                return;
            }
            StreamReader streamReader = new StreamReader(filename);
            string JSonString = streamReader.ReadToEnd();
            streamReader.Close();
            _restaurants = JsonSerializer.Deserialize<List<Restaurant>>(JSonString);
        }

        private void LoadOrderDetails(string filename)
        {
            StreamReader streamReader = new StreamReader(filename);
            string JSonString = streamReader.ReadToEnd();
            streamReader.Close();
            _orders = JsonSerializer.Deserialize<List<Order>>(JSonString);
        }

        private void SaveLocationDetails(string filename)
        {
            if (!File.Exists(filename))
            {
                return;
            }
            string JSonString = JsonSerializer.Serialize<List<Location>>(_location);
            StreamWriter streamWriter = new StreamWriter(filename);
            streamWriter.Write(JSonString);
            streamWriter.Close();
        }
        private void SaveUserDetails(string filename)
        {
            string JSonString = JsonSerializer.Serialize<List<UserInfo>>(_userInfo);
            StreamWriter streamWriter = new StreamWriter(filename);
            streamWriter.Write(JSonString);
            streamWriter.Close();
        }

        private void SaveRestaurantDetails(string filename)
        {
            string JSonString = JsonSerializer.Serialize<List<Restaurant>>(_restaurants);
            StreamWriter streamWriter = new StreamWriter(filename);
            streamWriter.Write(JSonString);
            streamWriter.Close();
        }

        private void SaveOrderDetails(string filename)
        {
            string JSonString = JsonSerializer.Serialize<List<Order>>(_orders);
            StreamWriter streamWriter = new StreamWriter(filename);
            streamWriter.Write(JSonString);
            streamWriter.Close();
        }
        //CRUD on UserInfo

        public List<Location> GetAllLocations()
        {
            return _location;
        }

        public bool AddLocation(Location location)
        {
            var Res = _location.Find(loc => loc.LocationName == location.LocationName);
            if(Res==null)
            {               
                _location.Add(location);
                return true;
            }
            return false;
        }
        public List<UserInfo> GetAllUsers()
        {
            return _userInfo;
        }

        public List<Owner> GetAllOwners()
        {
            return _userInfo.OfType<Owner>().ToList();
        }

        public bool AddUser(UserInfo userInfo)
        {
           UserInfo temp= _userInfo.Find(ui=>ui.Email==userInfo.Email);
            if(temp==null)
            {
                _userInfo.Add(userInfo);
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool AddRestaurant(Restaurant restaurant)
        {
            var Res=_restaurants.Find(r=>r.RestaurantName==restaurant.RestaurantName && r.RestLocation.LocationName== restaurant.RestLocation.LocationName);
            if(Res==null)
            {
                _restaurants.Add(restaurant);
                return true;
            }
            return false;
        }

        public List<Restaurant> GetRestaurants()
        {
            return _restaurants;
        }

        public List<Restaurant> GetRestaurantsByLocation(string LocName)
        {
            return _restaurants.Where(r=>r.RestLocation.LocationName==LocName).ToList();
        }

        public List<Restaurant> GetRestaurantsByOwner(string Email)
        {
            return _restaurants.Where(r => r.RestOwner.Email == Email).ToList();
        }

        public bool PlaceOrder(UserInfo custObj,List<OrderMenuEntry> orderdMenu,Restaurant restaurant)
        {
            Order order=new Order(restaurant,orderdMenu,custObj);
            _orders.Add(order);
            return true;
        }

        public List<Order> GetOrderList()
        {
            return _orders;
        }

        public List<Order> GetOrderByCustomer(String email)
        {
            return _orders.Where(o => o.OrderBy.Email == email).ToList() ;
        }

        public List<Order> GetOrderByRestaurant(Restaurant restaurant)
        {
            return _orders.Where(o => o.Restaurant==restaurant).ToList();
        }

    }
}
