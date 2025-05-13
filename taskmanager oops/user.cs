using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class User
    {
        public string Name { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string UserRole { get; set; }

        public User(string name, string userEmail, string userPassword, string userRole)
        {
            Name = name;
            UserEmail = userEmail;
            UserPassword = userPassword;
            UserRole = userRole;
        }
    }
}
