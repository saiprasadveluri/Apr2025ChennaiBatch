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
    public partial class AdminDashboard : Form
    {
        private DataProvider dataprovider;
        
        public AdminDashboard()
        {
            dataprovider=DataProvider.Instance;
            InitializeComponent();
        }
        private void UpdateLocationGrid()
        {
            List<Locations> locationlist = dataprovider.GetAllLocations();
            gridLocation.DataSource = null;
            gridLocation.DataSource = locationlist;
            gridLocation.Refresh();
        }
        private void UpdateRestauarntGrid()
        {
            List<Restaurants> restauarntlist = dataprovider.GetAllRestauarnts();
            gridRestaurants.DataSource = null;
            gridRestaurants.DataSource = restauarntlist;
            gridRestaurants.Refresh();
        }

        private void addLocationsToolStripMenuItem_Click(object sender, EventArgs e)
        {
           
            AddLocations addLocations = new AddLocations(dataprovider);
            addLocations.ShowDialog();
            UpdateLocationGrid();
            UpdateRestauarntGrid();
        }

        private void addRestaurantToolStripMenuItem_Click(object sender, EventArgs e)
        {

            NewRestaurant addrestaurant = new NewRestaurant(dataprovider);
            addrestaurant.ShowDialog();
            UpdateRestauarntGrid();


        }
    }
}
