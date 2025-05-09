using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class Customer
{
    public int Id;
    public string Name;
    public string Mobile;
}

class Driver
{
    public int Id;
    public string Name;
    public string VehicleNumber;
}



public class Ride
{
    public int RideId;
    public string Customer;
    public string Driver;
    public double Distance;
    public string Status = "Created";
    public double BillAmount;
    public void GenerateBill()
    {
        double ratePerKm = 10;
        BillAmount = Distance * ratePerKm;
    }
}

namespace RideApp
{
    internal class RideModels
    {
    }
}
