using System;
using System.Windows.Forms;
using FoodDeliveryApp.Models;

namespace FoodDeliveryApp.Forms
{
    public partial class OwnerDashboard : Form
    {
        private User _user;
        public OwnerDashboard(User user)
        {
            InitializeComponent();
            _user = user;
            this.Text = $"Owner Dashboard - Welcome {_user.Name}";
        }

        private void InitializeComponent()
        {
            throw new NotImplementedException();
        }
    }
}

