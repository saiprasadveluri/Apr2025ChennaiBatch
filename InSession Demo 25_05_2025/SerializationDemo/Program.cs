using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;
using System.Xml.Serialization;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Runtime.InteropServices;
namespace SerializationDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JSON Serializer
            Employee employee = new Employee();
            employee.Id = 1;
            employee.Name = "Mary";
            employee.Address = "Door No: 1, Lane:Some";
            employee.Password = "MyPassword";
            employee.Phones = new string[] { "12345", "76543", "98123" };
            string JSonString=JsonSerializer.Serialize<Employee>(employee, new JsonSerializerOptions()
            {
                IndentSize = 5
            }
           );
            
            StreamWriter sw = new StreamWriter("employee.json");
            sw.WriteLine(JSonString);
            sw.Close();
            //Deserialization.
            StreamReader sr = new StreamReader("employee.json");
            string json = sr.ReadToEnd();
            Employee empOut=JsonSerializer.Deserialize<Employee>(json);
            Console.WriteLine(empOut.Name);
        }

        private static void TestXmlSeria()
        {
            Employee employee = new Employee();
            employee.Id = 1;
            employee.Name = "Mary";
            employee.Address = "Door No: 1, Lane:Some";
            employee.Password = "MyPassword";
            employee.Phones = new string[] { "12345", "76543", "98123" };
            //XML Serialization
            XmlSerializer xmlSer = new XmlSerializer(typeof(Employee));
            StreamWriter sw = new StreamWriter("Employee.xml");
            xmlSer.Serialize(sw, employee);
            sw.Close();

            //XML: Deserialization
            /*XmlSerializer xmlSer = new XmlSerializer(typeof(Employee));
            StreamReader sr = new StreamReader("Employee.xml");
            Employee empDest= xmlSer.Deserialize(sr) as Employee;
            Console.WriteLine(empDest.Name);*/
        }
        private static void TestBinSeri()
        {
            /*Employee employee = new Employee();
            employee.Id = 1;
            employee.Name = "Mary";
            employee.Address = "Door No: 1, Lane:Some";
            //Serialization Process....            
            FileStream fs = new FileStream("Employee.bin", FileMode.OpenOrCreate, FileAccess.Write);
            BinaryFormatter binf = new BinaryFormatter();
            binf.Serialize(fs, employee);//Serialize the object to stream.
            fs.Close();//Close the stream.*/

            //Desrialization. READING FROM STREAM.
            FileStream fs = new FileStream("Employee.bin", FileMode.Open, FileAccess.Read);
            BinaryFormatter binf = new BinaryFormatter();
            Employee empDest = binf.Deserialize(fs) as Employee;
            fs.Close();
            Console.WriteLine(empDest.Name);
        }
    }
}
