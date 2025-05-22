using System;
using System.Windows.Forms;
using FoodDeliveryApp.Models;

namespace FoodDeliveryApp.Forms
{
    public partial class AdminDashboard : Form
    {
        private User _user;
        public AdminDashboard(User user)
        {
            InitializeComponent();
            _user = user;
            this.Text = $"Admin Dashboard - Welcome {_user.Name}";
        }

        private void InitializeComponent()
        {
            throw new NotImplementedException();
        }
        private void btnAddRestaurant_Click(object sender, EventArgs e)
        {
            var form = new AddRestaurantForm();
            form.ShowDialog(); // modal
        }

    }
}
