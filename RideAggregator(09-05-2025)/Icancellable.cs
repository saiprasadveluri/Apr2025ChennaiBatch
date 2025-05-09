using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal interface Icancellable
    {
        bool CancelRide();//Interface method.abstract & public by default
    }
}
