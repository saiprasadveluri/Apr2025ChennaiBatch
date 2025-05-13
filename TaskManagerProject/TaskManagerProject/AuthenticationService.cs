using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    public class AuthenticationService
    {
        private List<User> _users = new List<User>();

        public bool Login(string email, string password)
        {
            return _users.Any(u => u.Email == email && u.Password == password);
        }
    }
}
