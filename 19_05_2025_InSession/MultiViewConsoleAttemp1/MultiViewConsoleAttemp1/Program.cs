using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiViewConsoleAttemp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            ValueInput cls= new ValueInput();

            BarChart barChart = new BarChart();
            cls.ValueAdded += barChart.OnValueAdded;//Wire up

            LineChart lineChart = new LineChart();
            cls.ValueAdded += lineChart.OnValueAdded;//Wire up

            cls.AddData();
        }
    }
}
