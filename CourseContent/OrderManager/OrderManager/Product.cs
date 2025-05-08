using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrderManager
{
    public class Product
    {
        string name;
        string category="Electronics";
        double price;
        public int Qty {  get; set; }//Auto Implemented Prop

        //Properties
        public string ProdName
        {
            get { return name; }
            set { name = value; }
        }

        public double ProdPrice
        {
            get { return price; }
            set { price = value; }
        }

        public string ProdCat
        {
            get { return category; }
        }

        //Constru
        public Product(string nm,string ctg,double pr,int quantity)
        {
            name=nm;
            category=ctg;
            price=pr;
            Qty = quantity;
        }

        public Product(string nm, string ctg, double pr):this(nm, ctg,pr,10)
        {
           
        }
        //Public Method
        public void DisplayInfo()
        {
            Console.WriteLine($"{name}-{price}");
        }

        public double CalculateDiscount(string MembershipType)//Method Overloading.
        {
            double discount = CalculateDiscount();
            if ( MembershipType =="SILVER")
            {
                discount = discount * 1.1;
            }
            else if(MembershipType == "GOLD")
            {
                discount = discount * 1.2;
            }
            return discount;
        }
        public double CalculateDiscount()
        {
            double discount = 0;
            if (ProdPrice >= 1000 && ProdPrice < 1500)
            {
                if (Qty == 2)
                {
                    discount = ProdPrice * Qty * 5 / 100.0;
                }
                else if (Qty > 2)
                {
                    discount = ProdPrice * Qty * 10 / 100.0;
                }
            }
            else if (ProdPrice >= 1500 && ProdPrice < 2000)
            {
                if (Qty == 2)
                {
                    discount = ProdPrice * Qty * 7.5 / 100.0;
                }
                else if (Qty > 2)
                {
                    discount = ProdPrice * Qty * 15 / 100.0;
                }
            }
            else if (ProdPrice >= 2000)
            {
                discount = ProdPrice * Qty * 20 / 100.0;         
            }
            return discount;
        }

        ~Product()
        {
            Console.WriteLine("From Destr...");
        }

    }
}
