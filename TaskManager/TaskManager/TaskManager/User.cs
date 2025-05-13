using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class User:Project
    {
        public string userName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string role { get; set; }

        public User(string title, string description, User manager, string uName, string Email, string pswd, string Role)
        : base(title, description, manager)
        {
            userName = uName;
            email = Email;
            password = pswd;
            role = Role;
        }
        public override string ShowDetails()
        {
            return string.Format($"{userName}-{email}--{role}");
        }

    }
}
