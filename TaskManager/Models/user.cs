
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Enums;
namespace TaskManagement.Models
{
    internal class User
    {
        //public enum TaskStatus { Open, InProgress, OnHold, Resolved, Closed }
        //public enum Priority { Low, Medium, High }
        //public enum Severity { Minor, Major, Critical }
        public string UserName;
        public string Email;
        public string Password;
        public UserRole Role;
        public User(string name, string email, string password, UserRole r)
        {
            UserName = name;
            Email = email;
            Password = password;
            Role = r;
        }
    }
}
