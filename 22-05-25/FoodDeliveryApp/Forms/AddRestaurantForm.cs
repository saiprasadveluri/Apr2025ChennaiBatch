using System;
using System.Linq;
using System.Windows.Forms;
using System.Xml.Linq;
using FoodDeliveryApp.Models;

namespace FoodDeliveryApp.Forms
{
    public partial class AddRestaurantForm : Form
    {
        public AddRestaurantForm()
        {
            InitializeComponent();
        }

        private void AddRestaurantForm_Load(object sender, EventArgs e)
        {
            cmbOwners.DataSource = StaticData.Users.Where(u => u.Role == Role.Owner).ToList();
            cmbOwners.DisplayMember = "Name";
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtName.Text) || cmbOwners.SelectedItem == null)
            {
                MessageBox.Show("Please fill all fields.");
                return;
            }

            var restaurant = new Restaurant
            {
                RId = StaticData.Restaurants.Count + 1,
                Name = txtName.Text,
                Location = txtLocation.Text,
                MinOrderValue = numMinOrderValue.Value,
                Owner = (User)cmbOwners.SelectedItem
            };

            StaticData.Restaurants.Add(restaurant);
            MessageBox.Show("Restaurant added successfully!");
            this.Close();
        }
    }
}
