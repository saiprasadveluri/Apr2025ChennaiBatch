using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TravelEzeeManagement;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace TravelEzeeWinForms
{
    public partial class NewServices : Form
    {

        Admin _adminModule;
        public NewServices(Admin adminModule)
        {
            _adminModule = adminModule;
            _adminModule.ImportServices();
            InitializeComponent();
        }

        private void SaveButton_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(textServiceNo.Text) || string.IsNullOrEmpty(textFrom.Text) || string.IsNullOrEmpty(textTo.Text) || string.IsNullOrEmpty(textServiceTypeId.Text) || string.IsNullOrEmpty(textTotalDistance.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                TravelEzeeManagement.Service service = new TravelEzeeManagement.Service();
                service.ServiceNo =textServiceNo.Text;
                service.FromLocation = int.Parse(textFrom.Text);
                service.ToLocation=int.Parse(textTo.Text);
                service.ServiceTypeId = int.Parse(textServiceTypeId.Text);
                service.TotalDistance = int.Parse(textTotalDistance.Text);
                _adminModule.AddNewService(service);
                MessageBox.Show("service added successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            this.Close();
        }

        private void FromLocationBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            List<Location> locations = _adminModule.GetAllLocations();
            string SelVal = FromLocationBox.SelectedItem.ToString();
            ToLocationBox.Items.Clear();
            foreach (Location loc in locations)
            {
                if (loc.Name != SelVal)
                {
                    ToLocationBox.Items.Add(loc.Name);
                }
            }

        }
    }
}