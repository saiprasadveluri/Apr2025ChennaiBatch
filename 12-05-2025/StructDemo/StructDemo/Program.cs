using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StructDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Point p = new Point();
            p.XCord = 20;
            p.YCord = 30;
            Console.WriteLine("Before Move");
            p.GetInfo(true);
            MovePoint(10, p);
            Console.WriteLine("After Move");
            p.GetInfo(true);
        }


        static void MovePoint(int delta,Point p)
        {
            p.YCord += delta;
            p.XCord += delta;
            Console.WriteLine("From Method");
            p.GetInfo(true);

        }
    }
}
