using System;
using System.Windows.Forms;
using FoodDeliveryApp.Models;

namespace FoodDeliveryApp.Forms
{
    public partial class CustomerDashboard : Form
    {
        private User _user;
        public CustomerDashboard(User user)
        {
            InitializeComponent();
            _user = user;
            this.Text = $"Customer Dashboard - Welcome {_user.Name}";
        }

        private void InitializeComponent()
        {
            throw new NotImplementedException();
        }
    }
}
