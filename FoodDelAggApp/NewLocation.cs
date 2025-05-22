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
    public partial class NewLocation : Form
    {
        public DataProvider dataProvider;
        public NewLocation(DataProvider data)
        {
            dataProvider = data;
            InitializeComponent();
        }

        private void NewLocation_Load(object sender, EventArgs e)
        {

        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtLocName.Text) || string.IsNullOrEmpty(txtLocNum.Text))
            {
                MessageBox.Show("enter Location details");
            }
            else
            {
                Location location = new Location();
                
                location.Name = txtLocName.Text;
                location.LocationId = int.Parse(txtLocNum.Text);
                dataProvider.AddLocation(location);
                MessageBox.Show("Location added successfully");
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
