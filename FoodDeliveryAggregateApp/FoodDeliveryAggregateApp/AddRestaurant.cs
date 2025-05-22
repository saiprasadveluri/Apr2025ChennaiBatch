using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public partial class AddRestaurant : Form
    {
        private Dataprovider _dataprovider;
        public AddRestaurant(Dataprovider dataprovider)
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(ResId.Text) || string.IsNullOrEmpty(ResName.Text))
            {
                MessageBox.Show("Enter Details");
            }
            else
            {
                Location loc = new Location();
                loc.Id = int.Parse(ResId.Text);
                loc.Name = ResName.Text;
                _dataprovider.NewRestaurant(Res);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
}
