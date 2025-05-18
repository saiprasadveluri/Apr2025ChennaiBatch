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

namespace TravelEzeeForms
{
    public partial class AdminDashboard : Form
    {
        AdminModule _adminModule;
        public AdminDashboard()
        {
            InitializeComponent();
            _adminModule = new AdminModule();
        }


        private void AdminDashboard_Load(object sender, EventArgs e)
        {
            _adminModule.ImportLocations();
            UpdateLocationgrid();
            _adminModule.ImportServices();
            UpdateServicegrid();
        }
        private void UpdateLocationgrid()
        {
            List<Location> locations = _adminModule.GetAllLocations();
            GridLocation.DataSource = null;
            GridLocation.DataSource = locations;
            GridLocation.Refresh();
        }
        private void UpdateServicegrid()
        {
            List<Service> service = _adminModule.GetAllServices();
            GridService.DataSource = null;
            GridService.DataSource = service;
            GridService.Refresh();
        }

        private void AddNewLocation_Click(object sender, EventArgs e)
        {
            NewLocation newLocation = new NewLocation(_adminModule);
            newLocation.ShowDialog();
            UpdateLocationgrid();
        }

        private void AddNewService_Click(object sender, EventArgs e)
        {
            NewService newService = new NewService(_adminModule);
            newService.ShowDialog();
            UpdateServicegrid();
        }
    }
}
