using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDelApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Login_Click(object sender, EventArgs e)
        {
            string email = Email.Text;
            string password = Password.Text;

            var user = DataStore.Users.FirstOrDefault(u => u.Email == email && u.Password == password);

            if (user != null)
            {

                switch (user.Role)
                {
                    case "Admin":
                        new AdminDashboard(user).Show();
                        break;
                    case "Owner":
                        new OwnerDashboard(user).Show();
                        break;
                    case "Customer":
                        new UserDashboard(user).Show();
                        break;
                }

                this.Hide();
            }
            else
            {
                MessageBox.Show("Invalid email or password!", "Login Failed", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
