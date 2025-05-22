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
    public partial class AddLocation : Form
    {
        private Dataprovider _dataprovider;


        public AddLocation(Dataprovider dataprovider)
        {
            _dataprovider = dataprovider; 
            InitializeComponent();
        }

        private void btnsave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(LocId.Text) || string.IsNullOrEmpty(LocName.Text))
            {
                MessageBox.Show("Enter Details");
            }
            else
            {
                Location loc = new Location();
                loc.Id = int.Parse(LocId.Text);
                loc.Name = LocName.Text;
                _dataprovider.NewLocations(loc);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
 }

