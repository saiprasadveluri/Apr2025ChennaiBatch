﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDelForms.Lists
{
    public class Users
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Location {  get; set; }
        public  string Email {  get; set; }
        public string Password { get; set; }
        public override string ToString()
        {
            return $"User Id: {UserId} - Name: {UserName} -{Location} -{Email} -{Password}";
        }
    }
    public class Owner : Users
    {

    }
}
