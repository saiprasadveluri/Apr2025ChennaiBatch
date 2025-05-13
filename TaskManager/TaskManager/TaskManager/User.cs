using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class User
    {
        string userName { get; set; }
        string email { get; set; }
        string password { get; set; }
        string role { get; set; }

        public User(string uname, string Email, string pswd, string Role)
        {
            userName = uname;
            email = Email;
            password = pswd;
            role = Role;
        }
        public void showDetails()
        {
            Console.WriteLine($
        }

    }
}
