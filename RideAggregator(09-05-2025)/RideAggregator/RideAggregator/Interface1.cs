using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal interface ICancellable
    {
        bool CancelRide();  //Interface method. Virtual and public by default
    }
    
}
