using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class User
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        private string Password;
        public string Role { get; private set; }

        public User(string userName, string email, string password, string role)
        {
            UserName = userName;
            Email = email;
            Password = password;
            Role = role;
        }

        public bool Login(string email, string password)
        {
            return Email == email && Password == password;
        }

        public void ChangeRole(string newRole)
        {
            Role = newRole;
            Console.WriteLine($"{UserName} switched to role: {Role}");
        }
    }
}
