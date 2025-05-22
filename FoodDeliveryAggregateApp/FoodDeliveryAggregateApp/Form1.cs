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
    public partial class Form1 : Form // Login Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {
            // This can be used for dynamic UI updates
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            // This handles user input for the email field
        }

        private void label2_Click(object sender, EventArgs e)
        {
            // Another label event (e.g., password label)
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
            // Handles user input for the password field
        }

        private void button1_Click(object sender, EventArgs e) // Login Button Click Event
        {
            string email = textBox1.Text; // Email input
            string password = textBox2.Text; // Password input

            // Dummy authentication (Replace with database validation)
            if (email == "admin@foodapp.com" && password == "1234")
            {
                MessageBox.Show("Login Successful!");

                DashboardForm dashboard = new DashboardForm(); // Move to Dashboard
                dashboard.Show();
                this.Hide(); // Hide login form
            }
            else
            {
                MessageBox.Show("Invalid Credentials! Please try again.");
            }
        }
    }
}
