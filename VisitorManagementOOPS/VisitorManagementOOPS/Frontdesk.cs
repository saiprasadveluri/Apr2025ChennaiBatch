using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorManagementOOPS
{
    internal class Frontdesk
    {
        private readonly int HostCount;
        private readonly int VisitorCount;
        private Host[] hostsList;
        private Visitor[] visitorsList;
        //Tracking Variables
        private int curHostIndex = 0;
        private int curVisitorIndex = 0;
        public Frontdesk(int hostCount, int visitorCount)
        {
            HostCount = hostCount;
            VisitorCount = visitorCount;
            hostsList=new Host[HostCount];
            visitorsList = new Visitor[VisitorCount];
        }
        public bool AddHost(string hostId,
        string hostName,
        string employeeNumber,
        string department,
        string location,
        string contactNumber)
        {
            if(curHostIndex>= HostCount)
            {
                return false; 
            }
            else
            {
                Host newHost=new Host(hostId, hostName, employeeNumber, department, location, contactNumber);
                hostsList[curHostIndex] = newHost;
                curHostIndex++;
                return true;
            }
        }
        public bool AddVisitor(string name, string location, string parentCompany, string purpose, string mobileNumbers, DateTime vistingDate, string hostName)
        {
            if (curVisitorIndex >= VisitorCount)
            {
                return false;
            }
            else
            {
                Visitor newVisitor = new Visitor(name, location, parentCompany, purpose,
                mobileNumbers, vistingDate, hostName);
                visitorsList[curVisitorIndex] = newVisitor;
                ++curVisitorIndex;
                return true;
            }            
        }

        public void ViewAllHostDetails()
        {
            for (int i = 0; i < curHostIndex; i++)
            {
                hostsList[i].ShowDetails();
            }
        }

        public void ViewAllVistorDetails()
        {
            for (int i = 0; i < curVisitorIndex; i++)
            {
                visitorsList[i].ShowDetails();
            }
        }

        public void ViewVisitorsByDate(DateTime date)
        {
            if(visitorsList.Length>0)
            {
                var visitors=Array.FindAll(visitorsList, IsVisitorOnDate);
                foreach(var visitor in visitors)
                {
                    visitor.ShowDetails();
                }
            }
            else
            {
                Console.WriteLine("No Visitors");
            }

            bool IsVisitorOnDate(Visitor curVisitor)
            {
                if(curVisitor != null)
                return curVisitor.VisitedOnDate(date);
                else
                    return false;
            }
        }
        public void ViewVisitorsByHost(string HostId)
        {
            if (visitorsList.Length > 0)
            {
                var visitors = Array.FindAll(visitorsList, IsVisitorForHost);
                foreach (var visitor in visitors)
                {
                    visitor.ShowDetails();
                }
            }
            else
            {
                Console.WriteLine("No Visitors");
            }

            bool IsVisitorForHost(Visitor curVisitor)
            {
                if (curVisitor != null)
                    return curVisitor.VisitedForHost(HostId);
                else
                    return false;
            }
        }
    }
}
