using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryWindowForms
{
    public partial class AddLocations : Form
    {
        DataProvider _dataProvider;

        public AddLocations(DataProvider dataProvider)
        {
            InitializeComponent();
            _dataProvider = dataProvider;
        }

        private void btnAddLocations_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(LocId.Text) || string.IsNullOrEmpty
                    (LocName.Text))
            {
                MessageBox.Show("Enter Details");

            }
            else
            {
                FoodDeliveryWindowForms.Locations loc = new FoodDeliveryWindowForms.Locations();
                loc.LocationId = int.Parse(LocId.Text);
                loc.LocationName = LocName.Text;
                _dataProvider.NewLocations(loc);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();

            }
        }

        private void LocId_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
