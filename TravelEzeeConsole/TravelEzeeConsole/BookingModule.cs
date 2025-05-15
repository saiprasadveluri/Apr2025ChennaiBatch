using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    internal class BookingModule
    {
        private List<Booking> bookings = new List<Booking>();

        public void BookService(int bookingId, int serviceNumber, string passengerName, string seatNumber, string pickupPoint, string dropPoint)
        {
            Booking booking = new Booking(bookingId, serviceNumber, passengerName, seatNumber, pickupPoint, dropPoint);
            bookings.Add(booking);
            Console.WriteLine($"Booking confirmed for {passengerName}, Seat: {seatNumber}.");
        }

        public List<Booking> GetBookings()
        {
            return bookings;
        }
    }

    public class Booking
    {
        public int BookingId { get; set; }
        public int ServiceNumber { get; set; }
        public string PassengerName { get; set; }
        public string SeatNumber { get; set; }
        public string PickupPoint { get; set; }
        public string DropPoint { get; set; }

        public Booking(int bookingId, int serviceNumber, string passengerName, string seatNumber, string pickupPoint, string dropPoint)
        {
            BookingId = bookingId;
            ServiceNumber = serviceNumber;
            PassengerName = passengerName;
            SeatNumber = seatNumber;
            PickupPoint = pickupPoint;
            DropPoint = dropPoint;
        }

        public override string ToString()
        {
            return $"Booking ID: {BookingId}, Service: {ServiceNumber}, Passenger: {PassengerName}, Seat: {SeatNumber}, Pickup: {PickupPoint}, Drop: {DropPoint}";
        }
    }
}
