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
    public partial class NewRestuarant : Form
    {
        public DataProvider dataProvider;
        public NewRestuarant(DataProvider data)
        {
            dataProvider = data;
            InitializeComponent();
        }

        private void NewRestuarant_Load(object sender, EventArgs e)
        {

        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtRestId.Text) || string.IsNullOrEmpty(txtRestName.Text)
                ||string.IsNullOrEmpty(txtRestLoc.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                Restuarant restuarant = new Restuarant();
                restuarant.RestId = int.Parse(txtRestId.Text);
                restuarant.RestName = txtRestName.Text;
                restuarant.RestLoc = txtRestLoc.Text;
                dataProvider.AddRestuarant(restuarant);
                MessageBox.Show("Restuarant added successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
}
