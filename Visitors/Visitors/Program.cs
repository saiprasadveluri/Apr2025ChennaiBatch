using System;

public class Host
{
    public int HostId { get; set; }
    public string HostName { get; set; }
    public int EmployeeNumber { get; set; }
    public string Department { get; set; }
    public string Location { get; set; }
    public string ContactNumber { get; set; }

    public Host(int hostId, string hostName, int empNum, string dept, string location, string contact)
    {
        HostId = hostId;
        HostName = hostName;
        EmployeeNumber = empNum;
        Department = dept;
        Location = location;
        ContactNumber = contact;
    }

    public void DisplayHostDetails()
    {
        Console.WriteLine($"HostId: {HostId}, Name: {HostName}, Dept: {Department}, Contact: {ContactNumber}");
    }
}
