using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SerializationDemo
{
    //[Serializable]    
    public class Employee
    {
        [XmlAttribute("EmpID")]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        [XmlIgnore]
        public string Password {  get; set; }
        [XmlArray]
        [XmlArrayItem(ElementName ="PhoneEntry")]
        public string[] Phones { get; set; }
    }
}
