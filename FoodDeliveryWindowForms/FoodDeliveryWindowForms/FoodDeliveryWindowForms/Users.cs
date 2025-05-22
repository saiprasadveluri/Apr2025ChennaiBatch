using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryWindowForms
{
    internal class Users
    {
        public int Id {  get; set; }
        public string DisplayName {  get; set; }
        public string Role {  get; set; }

        public int Location {  get; set; }
        public string Email {  get; set; }

        public string Password { get; set; }
    }
}
