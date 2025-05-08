using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderManager
{
    public class Order
    {
        public string OrderNumber { get; set; }
        public string OrderDate  { get; set; }
        public string ShippingAddress { get; set; }
        public Product[] Products { get; set; }//Contains relation
        private int arrIndex = 0;
        public Order(string onumber,string odate,string shipAddress,int NumberOfProducts)
        {
            OrderNumber = onumber;
            OrderDate = odate;
            ShippingAddress = shipAddress;
            Products = new Product[NumberOfProducts];
        }

        public void ShowOrderDetails()
        {
            Console.WriteLine($"{OrderNumber}--{OrderDate}--{ShippingAddress}");
        }

        public bool AddProduct(Product p)
        {
            if(arrIndex> Products.Length)
            {
                Console.WriteLine("Max number reached");
                return false;
            }
            else
            {
                Products[arrIndex] = p;
                ++arrIndex;
                return true;
            }
        }
        public void ShowOrderProducts()
        {
            foreach(Product p in Products)
            {
                p.DisplayInfo();//Delegation
                double discount = p.CalculateDiscount();
                Console.WriteLine($"Peoduct Discount: {discount}");
            }
        }
    }
}
