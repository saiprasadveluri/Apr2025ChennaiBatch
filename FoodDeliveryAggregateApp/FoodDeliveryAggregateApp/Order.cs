using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoodDeliveryAggregateApp
{
    public class Order
    {
        public int OrderId { get; set; }
        public Restaurant Restaurant { get; set; }
        public User Customer { get; set; }
        public List<MenuItem> OrderedItems { get; set; }
        public decimal TotalPrice { get; set; }
        public decimal DiscountApplied { get; set; } = 0;

        public Order(int orderId, Restaurant restaurant, User customer, List<MenuItem> items)
        {
            OrderId = orderId;
            Restaurant = restaurant;
            Customer = customer;
            OrderedItems = items;
            TotalPrice = CalculateTotal();
        }

        private decimal CalculateTotal()
        {
            decimal total = 0;
            foreach (var item in OrderedItems)
            {
                total += item.Price;
            }
            return total - DiscountApplied;
        }
    }
}
