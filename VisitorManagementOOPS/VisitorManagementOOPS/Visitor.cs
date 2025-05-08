using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace VisitorManagementOOPS
{
    internal class Visitor
    {
        public string Name { get; }
        public string Location { get; }
        public string ParentCompany { get; }
        public string Purpose { get; }
        public string MobileNumbers { get; }
        public DateTime VistingDate { get; }
        public string HostId { get; }

        public Visitor(string name, string location, string parentCompany, string purpose, string mobileNumbers, DateTime vistingDate, string hostId)
        {
            Name = name;
            Location = location;
            ParentCompany = parentCompany;
            Purpose = purpose;
            MobileNumbers = mobileNumbers;
            VistingDate = vistingDate;
            HostId = hostId;
        }

        public void ShowDetails()
        {
            Console.WriteLine($"{Name}-{Location}-{ParentCompany}-{Purpose}-{MobileNumbers}-{VistingDate}-{HostId}");
        }

        public bool VisitedOnDate( DateTime date )
        {            
            return date.Date == VistingDate.Date;           
        }

        public bool VisitedForHost(string hostName)
        {
            return HostId.Equals( hostName );
        }
    }
}
