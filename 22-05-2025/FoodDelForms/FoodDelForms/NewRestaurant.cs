﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using FoodDelForms.Lists;

namespace FoodDelForms
{
    public partial class NewRestaurant : Form
    {
        DataProvider dataProvider;
        public NewRestaurant(DataProvider data)
        {
            InitializeComponent();
            dataProvider = data;
        
        }

        private void Save_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(RestName.Text) ||
                string.IsNullOrEmpty(RestId.Text)||
                string.IsNullOrEmpty(RLocation.Text) )
            {
                MessageBox.Show("enter details");
            }
            else
            {
                Restaurant rest = new Restaurant();
                rest.RestId = int.Parse(RestId.Text);
                rest.RestName = RestName.Text;
                rest.RLocation = RLocation.Text;
                dataProvider.AddRestaurant(rest);
                MessageBox.Show("Restuarant Added");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
    
}
