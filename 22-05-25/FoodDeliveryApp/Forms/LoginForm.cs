using System;
using System.Collections.Generic;
using System.Windows.Forms;
using FoodDeliveryApp.Models;

namespace FoodDeliveryApp.Forms
{
    public partial class LoginForm : Form
    {
        private List<User> users;

        public LoginForm()
        {
            InitializeComponent();
            LoadUsers();
        }

        private void LoadUsers()
        {
            if (StaticData.Users.Count == 0)
            {
                StaticData.Users.AddRange(new List<User>
        {
            new User { UId = 1, Name = "Alice", Email = "admin@food.com", Password = "admin123", Role = Role.Admin, Location = "CityA" },
            new User { UId = 2, Name = "Bob", Email = "owner@food.com", Password = "owner123", Role = Role.Owner, Location = "CityB" },
            new User { UId = 3, Name = "Charlie", Email = "cust@food.com", Password = "cust123", Role = Role.Customer, Location = "CityC" }
        });
            }
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            string email = txtEmail.Text.Trim();
            string password = txtPassword.Text.Trim();

            var user = StaticData.Users.Find(u => u.Email == email && u.Password == password);
            if (user == null)
            {
                MessageBox.Show("Invalid credentials");
                return;
            }

            this.Hide();
            switch (user.Role)
            {
                case Role.Admin:
                    new AdminDashboard(user).Show();
                    break;
                case Role.Owner:
                    new OwnerDashboard(user).Show();
                    break;
                case Role.Customer:
                    new CustomerDashboard(user).Show();
                    break;
            }
        }
    }
}
