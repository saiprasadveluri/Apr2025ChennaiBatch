using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication.ExtendedProtection;
using System.Text;
using System.Threading.Tasks;

namespace DelegatesDemo1
{
    internal class Program
    {
        public delegate void DoOperation(int a, int b);//Step 1
        public delegate int MyOpration(int a, int b);
        static void Main(string[] args)
        {
            MathOperations mathObj=new MathOperations();
            /*DoOperation doAdd = new DoOperation(Add);//Setp 2:
            doAdd(10, 20);//Invoke delegate. Call Indirection

            DoOperation doSubtact = new DoOperation(Subtract);//Setp 2:*/

            //DoOperation doAdd = Add;//Delegate Infrernce
            //DoOperation doSubtact = Subtract;//Delegate Infrernce
            //DoOperation doMultiply = Multiply;

            //Invoking Multiple method with safe delegate refernce.
            //Multicasting: Calling all the referenced methods in sequence in same order.
            //DoOperation doOp = Add;
            //doOp += Subtract;
            //doOp(2, 4);
            //MyOpration myOp = Add2;
            //int Res = myOp(4, 5);//Invoke the delagte
            //Console.WriteLine(Res);
            //Add(1, 2);//Direct call.

            //DoOperation annmDelegate = delegate (int x, int y)
            //{
            //    Console.WriteLine($"You Enterd: {x} - {y}");
            //};

            //Lamda expression
            //DoOperation annmDelegate = (x, y) =>
            //{
            //    Console.WriteLine($"You Entered: {x} - {y}");
            //};


            //DoOperation annmDelegate = (x, y) => 
            //Console.WriteLine($"You Entered: {x} - {y}");            
            //annmDelegate(10, 20);//Delegate Invocation

            MyOpration ops = mathObj.Add;
            int Res=ops(20, 30);
        }

        public static int Add2(int a, int b)
        {
            return a + b;
        }

        public static void Multiply(int a, int b)
        {
            Console.WriteLine($"From Multiply:{a * b}");
        }
        public static void Subtract(int a, int b)
        {
            Console.WriteLine($"From Subtract:{a - b}");
        }
        public static void Add(int a,int b)
        {
            Console.WriteLine($"From Add:{a + b}");
        }
    } 
}
