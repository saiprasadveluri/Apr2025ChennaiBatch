using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            BookingModule bookingModule = new BookingModule();

            Console.WriteLine("Available Services:");
            foreach (var service in DataProvider.GetServices())
            {
                Console.WriteLine(service);
            }

            Console.WriteLine("\nEnter service number to book:");
            int serviceNumber = int.Parse(Console.ReadLine());

            Service selectedService;
            try
            {
                selectedService = DataProvider.GetServiceById(serviceNumber);
            }
            catch (ItemNotFoundException ex)
            {
                Console.WriteLine(ex.Message);
                return;
            }

            Console.WriteLine("Enter your name:");
            string passengerName = Console.ReadLine();

            Console.WriteLine("Enter seat number:");
            string seatNumber = Console.ReadLine();

            Console.WriteLine("Enter pickup point:");
            string pickupPoint = Console.ReadLine();

            Console.WriteLine("Enter drop point:");
            string dropPoint = Console.ReadLine();

            int bookingId = new Random().Next(1000, 9999);

            bookingModule.BookService(bookingId, selectedService.ServiceNumber, passengerName, seatNumber, pickupPoint, dropPoint);

            Console.WriteLine("\nBooking Details:");
            foreach (var booking in bookingModule.GetBookings())
            {
                Console.WriteLine(booking);
            }
            var services = DataProvider.GetServices();
          

        }
    }
}