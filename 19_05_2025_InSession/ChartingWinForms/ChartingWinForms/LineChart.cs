using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms.DataVisualization.Charting;

namespace ChartingWinForms
{
    public partial class LineChart : Form
    {
        public LineChart()
        {
            InitializeComponent();
        }

        private void LineChart_Load(object sender, EventArgs e)
        {
            


        }
        public void OnValueAdded(List<PointsDataEntry> data)
        {
            chart1.Series.Clear();
            var series = chart1.Series.Add("Line");
            series.ChartType = SeriesChartType.Line;
            foreach (var entry in data)
            {
                series.Points.Add(new DataPoint()
                {
                    XValue = (double)entry.X,
                    YValues = new double[] { (double)entry.Y }
                });
            }            
        }
    }
}
