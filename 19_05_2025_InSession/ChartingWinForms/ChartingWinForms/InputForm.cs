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
    public partial class InputForm : Form
    {
        public event UpdateDataDelegate ValueAdded;
        List<PointsDataEntry> data = new List<PointsDataEntry>();
        public InputForm()
        {
            InitializeComponent();
        }

        private void btnAddValue_Click(object sender, EventArgs e)
        {
            data.Add(new PointsDataEntry()
            {
                X = valueX.Value,
                Y = valueY.Value
            });
            if(ValueAdded!=null)
            {
                ValueAdded(data);
            }
        }

        private void InputForm_Load(object sender, EventArgs e)
        {

        }
    }
}
