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
    public partial class NewLocation : Form
    {

        AdminModule _adminModule;
        public NewLocation(AdminModule admin)
        {
            _adminModule = admin;

            InitializeComponent();
        }

        private void Save_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(LocationNumber.Text) || string.IsNullOrEmpty(LocationName.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                TravelEzeeConsole.Location loc = new TravelEzeeConsole.Location();
                loc.LocationId = int.Parse(LocationNumber.Text);
                loc.Name = LocationName.Text;
                _adminModule.AddLocation(loc);
                MessageBox.Show("Location Added");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
}
