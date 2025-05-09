using System;
using System.Collections.Generic;
using System.Linq;

public class FrontDesk
{
    private List<Host> hosts = new List<Host>();
    private List<Visitor> visitors = new List<Visitor>();

    public void AddHost()
    {
        Console.Write("Enter Host ID: ");
        int hostId = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter Host Name: ");
        string hostName = Console.ReadLine();
        Console.Write("Enter Employee Number: ");
        int empNumber = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter Department: ");
        string department = Console.ReadLine();
        Console.Write("Enter Location: ");
        string location = Console.ReadLine();
        Console.Write("Enter Contact Number: ");
        string contact = Console.ReadLine();

        hosts.Add(new Host(hostId, hostName, empNumber, department, location, contact));
        Console.WriteLine("Host added successfully.\n");
    }

    public void AddVisitor()
    {
        Console.Write("Enter Visitor ID: ");
        int visitorId = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter Visitor Name: ");
        string visitorName = Console.ReadLine();
        Console.Write("Enter Visitor Location: ");
        string visitorLocation = Console.ReadLine();
        Console.Write("Enter Parent Company: ");
        string parentCompany = Console.ReadLine();
        Console.Write("Enter Purpose of Visit: ");
        string purpose = Console.ReadLine();
        Console.Write("Enter Mobile Number: ");
        string mobile = Console.ReadLine();
        Console.Write("Enter Visiting Date (yyyy-mm-dd): ");
        DateTime visitingDate = Convert.ToDateTime(Console.ReadLine());
        Console.Write("Enter Host ID: ");
        int visitorHostId = Convert.ToInt32(Console.ReadLine());

        visitors.Add(new Visitor(visitorId, visitorName, visitorLocation, parentCompany, purpose, mobile, visitingDate, visitorHostId));
        Console.WriteLine("Visitor added successfully.\n");
    }

    public void ViewAllHosts()
    {
        Console.WriteLine("\nList of Hosts:");
        foreach (var host in hosts)
        {
            host.DisplayHostDetails();
        }
    }

    public void ViewAllVisitors()
    {
        Console.WriteLine("\nList of Visitors:");
        foreach (var visitor in visitors)
        {
            visitor.DisplayVisitorDetails();
        }
    }

    public void ListVisitorsByDate()
    {
        Console.Write("Enter Date (yyyy-mm-dd) to list visitors: ");
        DateTime date = Convert.ToDateTime(Console.ReadLine());

        var filteredVisitors = visitors.Where(v => v.VisitingDate.Date == date.Date).ToList();
        Console.WriteLine($"\nVisitors on {date.ToShortDateString()}:");
        foreach (var visitor in filteredVisitors)
        {
            visitor.DisplayVisitorDetails();
        }
    }

    public void ListVisitorsByHostId()
    {
        Console.Write("Enter Host ID to view visitors: ");
        int hostId = Convert.ToInt32(Console.ReadLine());

        var filteredVisitors = visitors.Where(v => v.HostId == hostId).ToList();
        Console.WriteLine($"\nVisitors under HostId {hostId}:");
        foreach (var visitor in filteredVisitors)
        {
            visitor.DisplayVisitorDetails();
        }
    }

    public void RemoveVisitor()
    {
        Console.Write("Enter Visitor ID to remove: ");
        int visitorId = Convert.ToInt32(Console.ReadLine());

        var visitor = visitors.FirstOrDefault(v => v.VisitorId == visitorId);
        if (visitor != null)
        {
            visitors.Remove(visitor);
            Console.WriteLine("Visitor removed successfully.\n");
        }
        else
        {
            Console.WriteLine("Visitor not found.\n");
        }
    }
}
