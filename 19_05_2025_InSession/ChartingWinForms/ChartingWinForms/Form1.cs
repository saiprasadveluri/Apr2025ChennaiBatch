using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ChartingWinForms
{

    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            InputForm inputForm = new InputForm();
            inputForm.MdiParent = this;
            inputForm.Show();

            LineChart lineChart = new LineChart();
            lineChart.MdiParent = this;
            lineChart.Show();
            inputForm.ValueAdded += lineChart.OnValueAdded;

            BarChartForm  barChartForm
                = new BarChartForm();

            barChartForm.MdiParent = this;
            barChartForm.Show();
            inputForm.ValueAdded += barChartForm.OnValueAdded;

        }
    }
}
