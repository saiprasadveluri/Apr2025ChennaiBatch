using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class User:Project
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public User(string title, string description, User manager, string userName, string email, string password, string role)
        : base(title, description, manager)
        {
            UserName = userName;
            Email = email;
            Password = password;
            Role = role;
        }
        public override string ShowDetails()
        {
            return string.Format($"{UserName}-{Email}--{Role}");
        }


    }
}
    

