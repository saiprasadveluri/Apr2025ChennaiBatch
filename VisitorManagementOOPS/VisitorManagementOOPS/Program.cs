using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VisitorManagementOOPS
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Frontdesk frontdesk = new Frontdesk(5, 10);
            while (true)
            {
                Console.WriteLine("0-Exit,1-View All Hosts,2-View All Visiors,3-Visitors By Date,4- Visitors by Host,5-Add Host, 6 - Add Visitor");
                int selection=int.Parse(Console.ReadLine());
                switch (selection)
                {
                    case 0:
                        return;
                    case 1:
                        frontdesk.ViewAllHostDetails();
                      break;
                    case 2:
                        frontdesk.ViewAllVistorDetails();
                        break;
                    case 3:
                        Console.WriteLine("Enter Date:");
                        DateTime visitdate = DateTime.ParseExact(Console.ReadLine(), "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                        frontdesk.ViewVisitorsByDate(visitdate);
                        break;
                    case 4:
                        Console.WriteLine("Enter Host id:");
                        string hostId=Console.ReadLine();
                        frontdesk.ViewVisitorsByHost(hostId);
                        break;
                    case 5:
                        Console.Write("Host ID:");
                        string hid=Console.ReadLine();
                        Console.Write("Host Name:");
                        string hname = Console.ReadLine();
                        Console.Write("Host Employee Number:");
                        string empno = Console.ReadLine();
                        Console.Write("Host Department:");
                        string dept = Console.ReadLine();
                        Console.Write("Host Location:");
                        string loc = Console.ReadLine();
                        Console.Write("Host Contact:");
                        string contact = Console.ReadLine();
                        frontdesk.AddHost(hid, hname, empno, dept, loc, contact);
                        break;
                        case 6:
                        Console.Write("Visitor Name:");
                        string vname = Console.ReadLine();
                        Console.Write("Visitor Location:");
                        string location = Console.ReadLine();
                        Console.Write("Parent Org:");
                        string prnt = Console.ReadLine();
                        Console.Write("purpose:");
                        string purpose = Console.ReadLine();
                        Console.Write("mobileNumbers:");
                        string mobileNumbers = Console.ReadLine();
                        Console.Write("vistingDate:");
                        DateTime vdate = DateTime.ParseExact(Console.ReadLine(), "MM-dd-yyyy", System.Globalization.CultureInfo.InvariantCulture);
                        Console.Write("Host Id:");
                        string hostid = Console.ReadLine();
                        frontdesk.AddVisitor(vname, location, prnt, purpose, mobileNumbers, vdate, hostid);
                        break;
                }
            }
        }
    }
}
