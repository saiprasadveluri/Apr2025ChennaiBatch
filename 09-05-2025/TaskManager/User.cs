using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class User
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }

        public User(string username, string email, string password, Role role)
        {
            Username = username;
            Email = email;
            Password = password;
            Role = role;
        }

    }
}
