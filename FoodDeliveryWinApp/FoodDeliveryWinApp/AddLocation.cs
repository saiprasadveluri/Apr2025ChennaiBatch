using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryWinApp
{
    public partial class AddLocation : Form
    {
        DataProvider _dataProvider;
        public AddLocation(DataProvider dataProvider)
        {
            InitializeComponent();
            _dataProvider=dataProvider;
        }
       

        private void button1_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(btnLocation.Text) || string.IsNullOrEmpty(LocName.Text))
            {
                MessageBox.Show("Enter Details");
            }
            else
            {
                FoodDeliveryWinApp.Location loc = new FoodDeliveryWinApp.Location();
                loc.locationId = int.Parse(btnLocation.Text);
                loc.locationName = LocName.Text;
                _dataProvider.NewLocation(loc);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();


            }
        }

        

    }
}
