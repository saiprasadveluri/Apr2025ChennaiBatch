using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelAggregateApp.Business
{
    public class Users
    {
        public int UsersId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public int UserPassword {  get; set; }
        public int Location { get; }
    }
}
