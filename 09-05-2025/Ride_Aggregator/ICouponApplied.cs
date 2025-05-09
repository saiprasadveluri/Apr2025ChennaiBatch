using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ride_Aggregator
{
    internal interface ICouponApplied
    {
        bool ApplyCoupon(string code);
    }
}
