using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Food_Delivery_
{
    public partial class AddRestaurant : Form
    {
        public AddRestaurant()
        {
            InitializeComponent();
        }

        private void AddRestaurant_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Restaurants.Rest RestData = new Restaurants.Rest();
            RestData.RId = Convert.ToInt32(textBox1.Text);
            RestData.RestName = textBox2.Text;
            RestData.Location = comboBox1.Text;
            RestData.OwnerName = textBox3.Text;

            Restaurants set = new Restaurants();
            set.SetLabelText(RestData.RId, RestData.RestName, RestData.Location, RestData.OwnerName);
            set.Show();
        }
    }
}
