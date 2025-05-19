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
    public partial class NewLocation : Form
    {
        AdminModule _adminModule;
        public NewLocation(AdminModule adminModule)
        {
            _adminModule = adminModule;
            InitializeComponent();
        }

       

        private void btnOK_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtLocId.Text) || string.IsNullOrEmpty(txtLocName.Text))
            {
                MessageBox.Show("Enter Details");
            }
            else
            {
                TravelEzeeConsole.Location loc = new TravelEzeeConsole.Location();
                loc.LocationId = int.Parse(txtLocId.Text);
                loc.Name = txtLocName.Text;
                _adminModule.AddLocation(loc);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
        private void btnCancel_Click(object sender, EventArgs e)
        {
            DialogResult = DialogResult.Cancel;
            this.Close();
        }
    }
}
