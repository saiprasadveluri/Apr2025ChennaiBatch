using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryWinApp
{
    public partial class AdminDashboard : Form
    {
        private DataProvider _dataProvider;
        public AdminDashboard()
        {
            _dataProvider= DataProvider.Instance;
            InitializeComponent();
        }

      
        private void addLocationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddLocation addLocation = new AddLocation(_dataProvider);

        }
    }
}
