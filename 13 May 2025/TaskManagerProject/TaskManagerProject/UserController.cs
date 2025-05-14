using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerProject
{
    public class UserController
    {
        private UserService _userService = new UserService();

        public void CreateUser(User user)
        {
            _userService.AddUser(user);
        }

        public User GetUser(string email)
        {
            return _userService.GetUser(email);
        }
    }
}
