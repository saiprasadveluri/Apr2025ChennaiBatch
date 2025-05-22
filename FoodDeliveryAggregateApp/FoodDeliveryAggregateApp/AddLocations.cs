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
    public partial class AddLocations : Form
    {
        private DataProvider dataprovider;
        public AddLocations(DataProvider dataProvider)
        {
            dataprovider = dataProvider;
            InitializeComponent();
        }

        

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(locId.Text) || string.IsNullOrEmpty(locName.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                 Locations loc = new Locations();
                loc.Id = int.Parse(locId.Text);
                loc.Name = locName.Text;
               dataprovider.NewLocations(loc);
                MessageBox.Show("loc added succesfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }



        }
    }
}
