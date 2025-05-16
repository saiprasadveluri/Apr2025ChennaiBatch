
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class BookingModules
    {
        const string BasePath = "C:\\Users\\mitta\\source\\repos\\TravelEzeeConsole\\";
        private DataProvider dataProvider;
        public BookingModules()
        {
            dataProvider = DataProvider.Instance;
        }
        public void SaveBooking()
        {
            using (StreamWriter reader = new StreamWriter(BasePath + "AddBook.txt"))
            {
                foreach (Booking book in dataProvider.Bookings)
                {
                    reader.WriteLine(book.GetBooking());
                }
            }
        }
        public void ImportBooking()
        {
            using (StreamReader reader = new StreamReader(BasePath + "AddBook.txt"))
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
                            Start = int.Parse(srvArr[0]),
                            Dest = int.Parse(srvArr[1]),
                            SeatNo = int.Parse(srvArr[2])
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
    }
}
