using System;
using System.Collections.Generic;
using System.Windows.Forms;
using TravelEzeeConsole;

namespace TravelEzeeWinForms
{
    public partial class AdminDashboard : Form
    {
        private AdminModule adminLogic;

        public AdminDashboard()
        {
            InitializeComponent();
            adminLogic = new AdminModule();
        }

        private void AdminDashboard_Load(object sender, EventArgs e)
        {
            adminLogic.ImportLocations();
            adminLogic.ImportServices();
            LoadLocationsToGrid();
            LoadServicesToGrid();
        }

        private void LoadServicesToGrid()
        {
            var allServices = adminLogic.GetAllServices();
            dgvServiceList.DataSource = null;
            dgvServiceList.DataSource = allServices;
            dgvServiceList.Refresh();
        }

        private void LoadLocationsToGrid()
        {
            var allLocations = adminLogic.GetAllLocations();
            dgvLocationList.DataSource = null;
            dgvLocationList.DataSource = allLocations;
            dgvLocationList.Refresh();
        }

        private void btnCreateLocation_Click(object sender, EventArgs e)
        {
            var addLocationForm = new NewLocation(adminLogic);
            addLocationForm.ShowDialog();
            LoadLocationsToGrid();
        }

        private void dgvLocationList_CellClick(object sender, DataGridViewCellEventArgs e)
        {
        }

        private void grpServiceSection_Enter(object sender, EventArgs e)
        {
        }
    }
}
