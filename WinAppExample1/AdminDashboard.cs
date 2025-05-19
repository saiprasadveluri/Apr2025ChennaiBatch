using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TravelEzeeConsole;

namespace WinAppExample1
{
    public partial class AdminDashboard : Form
    {
        private AdminModule _adminModule;
        public AdminDashboard()
        {
            InitializeComponent();
            _adminModule = new AdminModule();
        }
        private void AdminDashboard_Load(object sender, EventArgs e)
        {
            _adminModule.ImportLocations();
            _adminModule.ImportServices();
            UpdateLocationGrid();
            UpdateServiceGrid();
        }
        private void UpdateLocationGrid()
        {
            List<Location> locationList = _adminModule.GetAllLocations();
            gridLocations.DataSource = null;
            gridLocations.DataSource = locationList;
            gridLocations.Refresh();
        }
        private void UpdateServiceGrid()
        {
            var serviceList = _adminModule.GetAllServices();
            gridServices.DataSource = null;
            gridServices.DataSource = serviceList;
            gridServices.Refresh();
        }


        private void btnAddLocation_Click(object sender, EventArgs e)
        {
            NewLocation newLocation = new NewLocation(_adminModule);
            newLocation.ShowDialog();
            UpdateLocationGrid();
        }

       
    }
}
