using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Outstanding_Resource
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Resource resource1 = new Paperback("Programming","Sphere","20","1234567890",300,12);
            Resource resource2 = new Paperback("Coding", "Shakes", "15", "112233445566", 250, 9);
            Resource resource3 = new Digital("Design patterns","George","15","8h 30 min","PDF",3.5);
            Resource resource4 = new Digital("Data Analysis", "Albert", "25", "10h 30 min", "PDF", 5);
            
            Console.WriteLine("Outstanding Resources");

            if(resource1.IsOutStanding())
            {
                Console.WriteLine($"{resource1.Title} by {resource1.Author}");
            }
            if (resource2.IsOutStanding())
            {
                Console.WriteLine($"{resource2.Title} by {resource2.Author}");
            }
            if (resource3.IsOutStanding())
            {
                Console.WriteLine($"{resource3.Title} by {resource3.Author}");
            }
            if (resource4.IsOutStanding())
            {
                Console.WriteLine($"{resource4.Title} by {resource4.Author}");
            }


            
        }
    }
}
