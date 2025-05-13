using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class User
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public User(string userName, string email, string password, string role)
        {
            UserName = userName;
            Email = email;
            Password = password;
            Role = role;
        }
    }
}
