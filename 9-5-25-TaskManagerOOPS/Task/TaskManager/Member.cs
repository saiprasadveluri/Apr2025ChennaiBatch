using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Member : Project
    {
        public string Username { get; set; }
        public string UserPassword { get; set; }
        public string UserEmail { get; set; }
        public string UserRole { get; set; }

        public Member(string title, string description, Member leader, string username, string email, string password, string role)
        : base(title, description, leader)
        {
            Username = username;
            UserEmail = email;
            UserPassword = password;
            UserRole = role;
        }

        public override string DisplayMemberInfo()
        {
            return string.Format($"{Username} - {UserEmail} -- {UserRole}");
        }
    }
}
