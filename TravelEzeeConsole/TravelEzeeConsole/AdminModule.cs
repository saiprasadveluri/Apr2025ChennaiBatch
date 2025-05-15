using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class AdminModule
    {
        private List<Service> services = new List<Service>();

    public void AddService(Service service)
    {
        services.Add(service);
    //    Console.WriteLine($"Service {service.ServiceNumber} added successfully.");
    }

    public void ListServices()
    {
        Console.WriteLine("\nAvailable Services:");
        foreach (var service in services)
        {
            Console.WriteLine(service);
        }
    }

    public List<Service> SearchService(string from, string to)
    {
        return services.Where(s => s.From == from && s.To == to).ToList();
    }
    }
}
