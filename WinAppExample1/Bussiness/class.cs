using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelEzeeConsole
{
    namespace TravelEzzDemo.Infra
    {
        public class EntityInUseException : ApplicationException
        {
            public EntityInUseException(string msg) : base(msg) { }

        }

    }
}
