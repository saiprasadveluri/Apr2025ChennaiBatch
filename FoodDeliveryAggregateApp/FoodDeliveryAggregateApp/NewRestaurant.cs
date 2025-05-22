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
    public partial class NewRestaurant : Form
    {
        private DataProvider dataprovider;
        public NewRestaurant(DataProvider dataProvider)
        {
            dataprovider = dataProvider;
            InitializeComponent();
            
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(rid.Text) || string.IsNullOrEmpty(rname.Text) ||
                string.IsNullOrEmpty(rloc.Text)|| string.IsNullOrEmpty(morder.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                Restaurants res = new Restaurants();
               
                res.RId = int.Parse(rid.Text);
                res.RestaurantName = rname.Text;
                res.RLocation=rloc.Text;
                res.MinOrderValue=double.Parse(morder.Text);
                dataprovider.AddRestaurant(res);
                MessageBox.Show("res added succesfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }



        }
    }
}
