using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ride_Aggregator
{
    internal interface ICancellable
    {
        bool CancelRide();//Interface Method. abstract & Public by default

    }
}
