using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public partial class AdminDashBoard : Form
    {
        private DataProvider dataProvider;
        public AdminDashBoard()
        {
            dataProvider=DataProvider.Instance;
            InitializeComponent();
           
        }

        private void newRestuarantToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewRestuarant newRestuarant = new NewRestuarant(dataProvider);
            newRestuarant.ShowDialog();
            UpdateRestuarantGrid();
        }
        
        private void UpdateRestuarantGrid()
        {
            List<Restuarant> Restuarantlist = dataProvider.GetAllRestuarant();
           // GridRestuarant.DataSource = null;
            GridRestuarant.DataSource = Restuarantlist;
           // GridRestuarant.Refresh();
        }

        private void addLocationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewLocation newLocation = new NewLocation(dataProvider);
            newLocation.ShowDialog();
            UpdateLocationGrid();
        }
        private void UpdateLocationGrid()
        {
            List<Location> locationlist = dataProvider.GetAllLocations();
            //GridLocation.DataSource = null;
            GridLocation.DataSource = locationlist;
            //GridLocation.Refresh();
        }
    }
}
