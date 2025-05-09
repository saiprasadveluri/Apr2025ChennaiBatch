using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal class Driver
    {
        private string Name { get; set; }
        private int Id { get; set; }
        private long Phone { get; set; }
        private string Lang { get; set; }
        private int Rating { get; set; }
        private int NoRides { get; set; }


        public Driver(string Name, long Phone, string Lang, int Rating, int NoRides)
        {
            this.Name = Name;
            this.Phone = Phone;
            this.Lang = Lang;
            this.Rating = Rating;
            this.NoRides = NoRides;
        }

        public void AddDriver()
        {
            Console.WriteLine("Enter Driver Name: ");
            Name = Console.ReadLine();
            Console.WriteLine("Enter Driver Id: ");
            Id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Driver Phone No: ");
            Phone = Convert.ToInt64(Console.ReadLine());
            Console.WriteLine("Enter Driver Language: ");
            Lang = Console.ReadLine();
            Console.WriteLine("Enter Driver Rating: ");
            Rating = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Driver No of Rides: ");
            NoRides = Convert.ToInt32(Console.ReadLine());
        }

        public string ViewDriver()
        {
            return string.Format($"Driver Name: {Name}\n Phone.No: {Phone}\n Lanaguages Known: {Lang}\n No. of Rides: {NoRides}\n Rating: {Rating}");
            //Console.WriteLine($"Driver Name: {Name}\n Phone.No: {Phone}\n Lanaguages Known: {Lang}\n No. of Rides: {NoRides}\n Rating: {Rating}");
        }
    }
}
