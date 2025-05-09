using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ride_aggregator
{
    internal interface ICancellable
    {
        bool CancelRide();  //interface method . abstract & public by default

    }
}
