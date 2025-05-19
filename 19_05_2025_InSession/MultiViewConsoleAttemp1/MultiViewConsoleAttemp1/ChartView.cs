using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiViewConsoleAttemp1
{
    public abstract class ChartView
    {
        public abstract void UpdateView();       
    }

    public class LineChart : ChartView
    {
        public override void UpdateView()
        {
            Console.WriteLine("Drawing Line Chart");
        }

        public void OnValueAdded()
        {
            Console.WriteLine("Drawing Line Chart");
        }
    }

    public class BarChart:ChartView
    {
        public override void UpdateView()
        {
            Console.WriteLine("Drawing BAR Chart");
        }
        public void OnValueAdded()
        {
            Console.WriteLine("Drawing Bar Chart");
        }
    }
}
