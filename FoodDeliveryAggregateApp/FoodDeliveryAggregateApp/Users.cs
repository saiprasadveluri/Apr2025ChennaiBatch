using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class User
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string Role { get; set; }
        public string Location { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User(int id, string name, string role, string location, string email, string password)
        {
            Id = id;
            DisplayName = name;
            Role = role;
            Location = location;
            Email = email;
            Password = password;
        }
    }
}
