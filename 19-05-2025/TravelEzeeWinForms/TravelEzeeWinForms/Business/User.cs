using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeManagement
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public User(int Id, string Name, string Email, string Password)
        {
            this.Id = Id;
            this.Name = Name;
            this.Email = Email;
            this.Password = Password;
        }

        //public void AddUser(User user)
        //{
        //    Console.WriteLine($"{}");
        //}
    }
}