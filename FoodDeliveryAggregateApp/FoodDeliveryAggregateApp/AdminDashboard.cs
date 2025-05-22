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
        private Dataprovider dataprovider;

        public AdminDashboard()
        {
            dataprovider = Dataprovider.Instance;
            InitializeComponent();
         
        }
        private void UpdateLocationGrid()
        {
            List<Location> locationList = dataprovider.GetAllLocations();
            gridLocation.DataSource = null;
            gridLocation.DataSource = locationList;
            gridLocation.Refresh();
        }

        private void updateRestaurantGrid()
        {
            List<Restuarant> locationList = dataprovider.GetAllRestaurants();
            gridrestaurant.DataSource = null;
            gridrestaurant.DataSource = locationList;
            gridrestaurant.Refresh();
        }


        private void addLocationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddLocation addLocation = new AddLocation(dataprovider);
            addLocation.ShowDialog();
            UpdateLocationGrid();

        }

        private void addRestaurantToolStripMenuItem_Click(object sender, EventArgs e)
        {
            AddRestaurant addrestaurant = new AddRestaurant(dataprovider);
            addrestaurant.ShowDialog();
            updateRestaurantGrid();

            
            

        }

       
    }
}
