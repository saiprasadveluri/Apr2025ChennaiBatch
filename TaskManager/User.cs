using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Models
{
    public enum UserRole { SiteAdmin, ProjectManager, Developer, QA }

    public class User
    {
        public string username;
        private string email;
        private string password;
        private UserRole role;

        public User(string username, string email, string password, UserRole role)
        {
            this.username = username;
            this.email = email;
            this.password = password;
            this.role = role;
        }

        public string GetUsername() { return username; }
        public void SetUsername(string value) { username = value; }

        
        public string GetEmail() { return email; }
        public void SetEmail(string value) { email = value; }

       
        public string GetPassword() { return password; }
        public void SetPassword(string value) { password = value; }

        
        public UserRole GetRole() { return role; }
    }
}