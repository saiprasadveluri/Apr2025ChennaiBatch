using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VehicleAnalogy
{
    public abstract class VehicleFactory
    {
        public abstract Component GetEngine();
        public abstract Component GetSeating();
    }

    public class BusFactory: VehicleFactory
    {
        public override Component GetEngine()
        {
            return new BusEngine();
        }
        public override Component GetSeating()
        {
          
            return new BusSeating();
        }
    }

    public class CarFactory : VehicleFactory
    {
        public override Component GetEngine()
        {
            return new CarEngine();
        }
        public override Component GetSeating()
        {
            return new CarSeating();
        }
    }
}
