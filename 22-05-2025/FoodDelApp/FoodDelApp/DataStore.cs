using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelApp
{
    public static class DataStore
    {
        public static List<User> Users = new List<User>
    {
        new User { UId = 1, DisplayName = "Admin", Role = "Admin", Email = "admin@example.com", Password = "admin123", Location = "HQ" },
        new User { UId = 2, DisplayName = "Owner", Role = "Owner", Email = "owner@example.com", Password = "owner123", Location = "Chennai" },
        new User { UId = 3, DisplayName = "Customer", Role = "Customer", Email = "user@example.com", Password = "user123", Location = "Chennai" }
    };
        public static List<Restaurant> Restaurants = new List<Restaurant>();
    }
}
