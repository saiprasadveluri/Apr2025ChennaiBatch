using System;

public class Visitor
{
    public int VisitorId { get; set; }
    public string Name { get; set; }
    public string Location { get; set; }
    public string ParentCompany { get; set; }
    public string Purpose { get; set; }
    public string MobileNumber { get; set; }
    public DateTime VisitingDate { get; set; }
    public int HostId { get; set; }

    public Visitor(int visitorId, string name, string location, string parentCompany, string purpose, string mobile, DateTime visitingDate, int hostId)
    {
        VisitorId = visitorId;
        Name = name;
        Location = location;
        ParentCompany = parentCompany;
        Purpose = purpose;
        MobileNumber = mobile;
        VisitingDate = visitingDate;
        HostId = hostId;
    }

    public void DisplayVisitorDetails()
    {
        Console.WriteLine($"VisitorId: {VisitorId}, Name: {Name}, Company: {ParentCompany}, HostId: {HostId}");
    }
}
