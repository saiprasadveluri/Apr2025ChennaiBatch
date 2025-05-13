using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager1
{
    internal class user
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public user(string title, string description, user manager, string userName, string email, string password, string role)
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
    }
}
