using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using FoodDelForms.Lists;

namespace FoodDelForms
{
    public partial class AdminDashboard : Form
    {
        DataProvider dataProvider;
        public AdminDashboard()
        {
            dataProvider=DataProvider.Instance;
            InitializeComponent();
        }

        private void locationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewLocation newlocation = new NewLocation(dataProvider);
            newlocation.ShowDialog();
            UpdateLocationgrid();

        }
        private void UpdateLocationgrid()
        {
            List<Location> locations = dataProvider.GetAllLocations();
            //GridLocation.DataSource = null;
            GridLocation.DataSource = locations;
            //GridLocation.Refresh();
        }
        private void UpdateResturantgrid()
        {
            List<Restaurant> rests = dataProvider.GetAllRestaurants();

            GridRestaurant.DataSource = rests;
        }

        private void addRestaurantToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewRestaurant newrest = new NewRestaurant(dataProvider);
            newrest.ShowDialog();
            UpdateResturantgrid();
        }
    }
}
