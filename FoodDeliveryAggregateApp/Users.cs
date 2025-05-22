using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Users
    {
        public int Id { get; set; }

        public string DisplayName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public int Location { get; set; }

    }
}
