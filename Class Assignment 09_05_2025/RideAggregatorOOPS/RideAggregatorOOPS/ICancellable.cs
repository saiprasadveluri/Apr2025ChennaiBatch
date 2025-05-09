using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregatorOOPS
{
    internal interface ICancellable
    {
        bool CancelRide();//Interface Method. abstract & Public by default
    }
}
