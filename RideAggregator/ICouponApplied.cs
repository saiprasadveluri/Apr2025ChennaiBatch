using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RideAggregator
{
    internal interface ICouponApplied
    {
        bool ApplyCoupon(string code);

    }
}
