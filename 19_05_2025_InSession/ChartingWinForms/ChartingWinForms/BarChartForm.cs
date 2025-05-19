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
    public partial class BarChartForm : Form
    {
        public BarChartForm()
        {
            InitializeComponent();
        }

        private void BarChartForm_Load(object sender, EventArgs e)
        {

        }

        public void OnValueAdded(List<PointsDataEntry> data)
        {
            chart1.Series.Clear();
            var series = chart1.Series.Add("Bar");
            series.ChartType = SeriesChartType.Bar;
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
