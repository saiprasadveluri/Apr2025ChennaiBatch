using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DishType { get; set; } // Veg, Non-Veg, Jain
        public decimal Price { get; set; }
        public int ValueForUnit { get; set; }
        public string Units { get; set; } // Gms, Ml, Mtrs
        public int AvailableQuantity { get; set; } = 10;

        public MenuItem(int id, string name, string dishType, decimal price, int value, string units)
        {
            Id = id;
            Name = name;
            DishType = dishType;
            Price = price;
            ValueForUnit = value;
            Units = units;
        }
    }
}
