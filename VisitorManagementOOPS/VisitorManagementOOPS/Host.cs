using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorManagementOOPS
{
    internal class Host
    {
        string hostId;
        string hostName;
        string employeeNumber;
        string department;
        string location;
        string contactNumber;

# region Properties
        public string HostId
        {
            get { return hostId; }
            set
            {
                hostId = value;
            }
        }
        public string HostName
        {
            get { return hostName; }
            set
            {
                hostName = value;
            }
        }
        public string EmpNumber
        {
            get { return employeeNumber; }
            set
            {
                employeeNumber = value;
            }
        }
        public string Department
        {
            get { return department; }
            set
            {
                department = value;
            }
        }
        public string Location
        {
            get { return location; }
            set
            {
                location = value;
            }
        }
        public string Contact
        {
            get { return contactNumber; }
            set
            {
                contactNumber = value;
            }
        }
        #endregion
        public Host(string hostId,
        string hostName,
        string employeeNumber,
        string department,
        string location,
        string contactNumber)
        {
            this.hostId=hostId;
            this.hostName=hostName;
            this.employeeNumber=employeeNumber;
            this.department=department;
            this.location=location;
            this.contactNumber=contactNumber;
        }
        public void ShowDetails()
        {
            Console.WriteLine($"{hostId}-{hostName}-{employeeNumber}-{department}-{location}-{contactNumber}");
        }


        
    }
}
