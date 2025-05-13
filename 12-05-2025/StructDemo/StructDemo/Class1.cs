using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StructDemo
{
    internal struct ComplexPint : IDisposable//Base as Interface.
    {
        public void Dispose()
        {
            
        }
    }
    internal struct Point
    {
        public int XCord {  get; set; }
        public int YCord { get; set; }
        private int ZCord { get; set; }
        //Constr
        //public Point()//C# Ver above: 10.Below Ver 10,
        //              //we can not have paramless constructor on struct.
        //{
        //    XCord = 0;
        //    YCord=0;
        //    ZCord = 0;
        //}

        public Point(int x, int y,int z)
        {
            XCord = 0;
            YCord=0;
            ZCord = 0;
        }

        public void GetInfo()
        {
            Console.WriteLine($"PX: {XCord}");
        }
        public void GetInfo(bool All)
        {
            Console.WriteLine($"PX: {XCord} - PY:{YCord} - pZ: {ZCord}");
        }
        //~Point()//Not allowed
        //{

        //}
    }
}
