using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChartingWinForms
{
    public delegate void UpdateDataDelegate(List<PointsDataEntry> data);    
    public struct PointsDataEntry
    {
        public decimal X; 
        public decimal Y;
    }
}
