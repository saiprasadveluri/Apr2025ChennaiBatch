using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public partial class AdminDashboard : Form
    {
        private DataProvider _dataProvider;
        public AdminDashboard()
        {
            _dataProvider = DataProvider.Instance;
            InitializeComponent();
        }
        private void UpdateLocationGrid()
        {
            List<Location> locationlist = _dataProvider.GetAllLocations();
            gridLocation.DataSource = null;
            gridLocation.DataSource = locationlist;
            gridLocation.Refresh();
        }



        private void addLocationsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddLocation addLocation = new AddLocation(_dataProvider);
            addLocation.ShowDialog();
            UpdateRestaurantGrid();
        }
        private void UpdateRestaurantGrid()
        {
            List<Restaurant> Restaurantlist = _dataProvider.GetAllLocations();
            gridRestaurant.DataSource = null;
            gridRestaurant.DataSource = Restaurantlist;
            gridRestaurant.Refresh();
        }
        private void addRestaurantsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddRestaurant addRestaurant = new AddRestaurant(_dataProvider);
            addRestaurant.ShowDialog();
            UpdateRestaurantGrid();
        }
    }
}

