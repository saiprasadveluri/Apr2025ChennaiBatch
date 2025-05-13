using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskmanager1
{
    internal class Users
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public Users(string title, string description, Users manager, string userName, string email, string password, string role)
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

        internal void AssignTaskToUser(Task task1, User developer)
        {
            throw new NotImplementedException();
        }
    }
}
