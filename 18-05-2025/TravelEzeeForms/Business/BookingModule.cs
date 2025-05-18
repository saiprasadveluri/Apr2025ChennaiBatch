using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    public class BookingModule
    {
        const string Path = "C:\\Users\\Charpitha Reddy\\OneDrive\\Desktop\\C#\\16-05-2025\\";
        private DataProvider dataProvider;
        public BookingModule()
        {
            dataProvider = DataProvider.Instance;
        }
        public void SaveBookings()
        {
            using (StreamWriter reader = new StreamWriter(Path + "AddBooking.txt"))
            {
                foreach (Booking book in dataProvider.Bookings)
                {
                    reader.WriteLine(book.GetBookingdetails());
                }
            }
        }
        public void ImportBookings()
        {
            using (StreamReader reader = new StreamReader(Path + "AddBooking.txt"))
            {
                while (true)
                {
                    string srvEntry = reader.ReadLine();
                    if (srvEntry == null)
                        break;
                    var srvArr = srvEntry.Split(',');
                    if (srvArr.Length == 3)
                    {
                        Booking book = new Booking()
                        {
                            Source = int.Parse(srvArr[0]),
                            Destination = int.Parse(srvArr[1]),
                            Seatno = int.Parse(srvArr[2])
                        };
                        dataProvider.Bookings.Add(book);
                    }
                }
            }
        }
        public List<Service> GetServicesBetweenLocations(int Start, int Dest)
        {
            return dataProvider.Services.Where(srv => srv.FromLocation == Start && srv.ToLocation == Dest).ToList();
        }

        public void AddBooking(Booking booking)
        {
            dataProvider.Bookings.Add(booking);
        }
        public List<Booking> GetAllBookingDetails()
        {
            return dataProvider.Bookings;

        }
    }
    }