using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public Role UserRole { get; set; }

        public User(int userId, string userName, Role userRole)
        {
            UserId = userId;
            UserName = userName;
            UserRole = userRole;
        }
    }
}
