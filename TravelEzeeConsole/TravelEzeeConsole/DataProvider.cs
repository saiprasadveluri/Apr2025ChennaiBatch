using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class DataProvider
    {
        private static List<Service> services = new List<Service>
    {
        new Service(101, "Chennai", "Tadipatri", ServiceType.Luxury, 400),
        new Service(102, "Tadipatri", "Chennai", ServiceType.Luxury, 400),
        new Service(103, "Hyderabad", "Tadipatri", ServiceType.Garuda, 300),
        new Service(104, "Tadipatri", "Hyderabad", ServiceType.Garuda, 300),
        new Service(105, "Rajampet", "Tadipatri", ServiceType.Ordinary, 210),
        new Service(106, "Tadipatri", "Rajampet", ServiceType.Ordinary, 210),
        new Service(107, "Bangalore", "Tadipatri", ServiceType.Express, 350),
        new Service(108, "Tadipatri", "Bangalore", ServiceType.Express, 350)
    };

        private static List<User> users = new List<User>
        {
        new User(1, "AdminUser", Role.Admin),
        new User(2, "CustomerUser", Role.Customer)
    };

        public static List<Service> GetServices()
        {
            return services;
        }

        public static Service GetServiceById(int serviceNumber)
        {
            return services.Find(s => s.ServiceNumber == serviceNumber) ?? throw new ItemNotFoundException("Service not found.");
        }

        public static void AddService(Service service)
        {
            services.Add(service);
        }

        public static List<User> GetUsers()
        {
            return users;
        }

        public static User GetUserById(int userId)
        {
            return users.Find(u => u.UserId == userId) ?? throw new ItemNotFoundException("User not found.");
        }
    }
}
