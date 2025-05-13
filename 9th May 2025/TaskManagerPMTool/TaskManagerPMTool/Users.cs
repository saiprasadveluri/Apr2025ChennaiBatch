using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class Users
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public Users(string userName, string email, string password, string role)
        {
            UserName = userName;
            Email = email;
            Password = password;
            Role = role;
        }

        public string GetUserInfo()
        {
            return string.Format($"User Name-{UserName} \n Email-{Email} \n Password-{Password} \n Role-{Role}");
        }
    }
}