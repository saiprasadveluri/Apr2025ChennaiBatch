using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using FoodDelAggregateApp.Business;

namespace FoodDelAggregateApp
{
    public partial class NewRestaurant : Form
    {
        public DataProvider _dataProvider;
        public NewRestaurant(DataProvider dataProvider)
        {
            _dataProvider=dataProvider;
            InitializeComponent();
        }

        private void RestSavebutton_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(textRestId.Text) 
                || string.IsNullOrEmpty(textRestName.Text)
                || string.IsNullOrEmpty(textLocation.Text)
                || string.IsNullOrEmpty(textMinOrderVal.Text)
                )
            {
                MessageBox.Show("enter restaurant details");
            }
            else
            {
                Restaurant rest = new Restaurant();
                rest.RestId = int.Parse(textRestId.Text);
                rest.RestName = textRestName.Text;
                rest.Location = int.Parse(textLocation.Text);
                rest.MinOrderVal = int.Parse(textMinOrderVal.Text);
                _dataProvider.AddRestaurant(rest);
                MessageBox.Show("Restaurant added successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
}
