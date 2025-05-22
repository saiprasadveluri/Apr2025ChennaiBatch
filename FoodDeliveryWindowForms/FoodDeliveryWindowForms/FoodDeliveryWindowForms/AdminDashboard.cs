using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryWindowForms
{
    public partial class AdminDashboard : Form
    {
        private DataProvider _dataProvider;
        public AdminDashboard()
        {
            _dataProvider = DataProvider.Instance;
            InitializeComponent();
        }

       
        
        private void UpdateLocationgrid()
        {
            List<Locations> locationlist = _dataProvider.GetAllLocations();
            gridLocation.DataSource = null;
            gridLocation.DataSource = locationlist;
            gridLocation.Refresh();
        }

        private void UpdateRestaurantgrid()
        {
            List<Restaurant> restaurantlists = _dataProvider.GetAllRestaurants();
            gridRestaurant.DataSource = null;
            gridRestaurant.DataSource = restaurantlists;
            gridRestaurant.Refresh();
        }




        private void addLocationsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddLocations addLocation = new AddLocations(_dataProvider);
            addLocation.ShowDialog();
            UpdateLocationgrid();
        }

        private void addRestaurantToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewRestaurant addRestaurant = new NewRestaurant(_dataProvider);
            addRestaurant.ShowDialog();
            UpdateRestaurantgrid();

        }
    }
}
