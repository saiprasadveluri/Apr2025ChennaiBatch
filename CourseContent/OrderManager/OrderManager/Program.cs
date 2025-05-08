using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderManager
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Product Count In Order:");
            int nProdCount=int.Parse(Console.ReadLine());
            int ncurProdNumber = 0;
            Order order = new Order("001", DateTime.Now.ToLongDateString(), "Address Here", nProdCount);
            if (nProdCount > 0)
            {
                bool Success = false;
                do
                {
                    //Success = false;
                    Console.WriteLine($"Product Number: {ncurProdNumber}");
                    string ProdName, ProdCatg;
                    double Price;
                    int Qty;
                    Console.WriteLine("Enter Name:");
                    ProdName = Console.ReadLine();
                    Console.WriteLine("Enter Catg:");
                    ProdCatg = Console.ReadLine();
                    Console.WriteLine("Enter Price:");
                    Price = double.Parse(Console.ReadLine());
                    Console.WriteLine("Enter Qty:");
                    Qty = int.Parse(Console.ReadLine());

                    Product prod1 = new Product(ProdName, ProdCatg, Price, Qty);
                    Success = order.AddProduct(prod1);
                    ++ncurProdNumber;
                } while (ncurProdNumber<nProdCount);
            }
            order.ShowOrderProducts();

            
            

            //prod1.DisplayInfo();
            //double orderDiscount= prod1.CalculateDiscount();
            //Console.WriteLine($"Without Membership: {orderDiscount}");

            //double orderDiscount2 = prod1.CalculateDiscount("GOLD");
            //Console.WriteLine($"With GOLD Membership: {orderDiscount2}");
            //prod1 = null;
        }
    }
}
