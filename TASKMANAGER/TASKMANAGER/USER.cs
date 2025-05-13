using System;

namespace TaskManager.Models
{
    public enum UserRole { SiteAdmin, ProjectManager, Developer, QA }

    public class User
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserRole Role { get; set; }

        public User(string username, string email, string password, UserRole role)
        {
            Username = username;
            Email = email;
            Password = password;
            Role = role;
        }
    }
}
