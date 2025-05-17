using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzee
{
    internal class Program
    {
        static Admin admin = new Admin();
        static void Main(string[] args)
        {

            admin.ImportLocations();
            admin.ImportServiceTypes();
            admin.ImportServices();
            Console.WriteLine("Locations:");
            List<Location> locs = admin.GetAllLocations();
            foreach (Location location in locs)
            {
                Console.WriteLine(location);
            }

            var SrvTypes = admin.GetAllServiceTypes();
            Console.WriteLine("Service Types:");
            foreach (var srvType in SrvTypes)
            {
                Console.WriteLine(srvType);
            }
            Console.WriteLine("Service List:");
            foreach (var srv in admin.GetAllServices())
            {
                Console.WriteLine(srv);
            }
            while (true)
            {
                Console.WriteLine("0: Exit");
                int Opt = int.Parse(Console.ReadLine());
                if (Opt == 0)
                    break;
                //Adding New Service
                Console.WriteLine("Add New Service:");
                Console.Write("Service Id:");
                string srvId = Console.ReadLine();

                Console.Write("FromLocation:");
                int FromLocation = int.Parse(Console.ReadLine());


                Console.Write("To Location:");
                int ToLocation = int.Parse(Console.ReadLine());

                Console.Write("Service Type Id:");
                int SrvType = int.Parse(Console.ReadLine());

                Console.Write("Distance:");
                double dist = double.Parse(Console.ReadLine());
                Service service = new Service()
                {
                    ServiceNo = srvId,
                    FromLocation = FromLocation,
                    ToLocation = ToLocation,
                    ServiceTypeId = SrvType,
                    TotalDistance = dist
                };
                //Do Validation
                if (service.FromLocation == service.ToLocation)
                {
                    continue;
                }
                if (admin.IsLocationExists(service.FromLocation) && admin.IsLocationExists(service.ToLocation))
                {
                    admin.AddNewService(service);
                }
                else
                {
                    Console.WriteLine("Error In locations");
                }
            }
            var SrvList = admin.GetAllServices();
            foreach (var srv in SrvList)
            {
                Console.WriteLine(srv);
            }
            //Save All Entities
            admin.SaveServices();
        }
    }
}
