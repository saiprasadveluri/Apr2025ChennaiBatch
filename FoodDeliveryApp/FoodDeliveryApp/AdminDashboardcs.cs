using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryApp
{
    public partial class AdminDashboard : Form
    {
        private DataProvider dataProvider;
        public AdminDashboard()
        {
            dataProvider = DataProvider.Instance;
            InitializeComponent();
        }

        private void addRestaurantToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewRestaurant newRestaurant = new NewRestaurant(dataProvider);
            newRestaurant.ShowDialog();
            UpdateRestaurantGrid();
        }
        private void UpdateRestaurantGrid()
        {
            List<Restaurant> restaurantlist = dataProvider.GetAllRestaurants();
            RestaurantsGrid.DataSource = null;
            RestaurantsGrid.DataSource = restaurantlist;
            RestaurantsGrid.Refresh();
        }

        private void addLocationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            NewLocation newLocation = new NewLocation(dataProvider);
            newLocation.ShowDialog();
            UpdateLocationGrid();
        }

        private void UpdateLocationGrid()
        {
            List<Location> locationslist = dataProvider.GetAllLocations();
            LocationsGrid.DataSource = null;
            LocationsGrid.DataSource = locationslist;
            LocationsGrid.Refresh();
        }
    }
}
