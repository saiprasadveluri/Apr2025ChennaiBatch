using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Food_Delivery_
{
    public partial class Registration : Form
    {
        
        public Registration()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            
        }

        private void UserAdding_Click(object sender, EventArgs e)
        {
            UserData.User userData = new UserData.User();
            userData.UserId = Convert.ToInt32(textBox1.Text);
            userData.UserName = textBox4.Text;
            userData.UserEmail = textBox3.Text;
            userData.UserPassword = textBox2.Text;
            userData.Role = textBox5.Text;
            UserData set = new UserData();
            set.SetLabelText(userData.UserId, userData.UserName, userData.UserEmail, userData.UserPassword, userData.Role);
            set.Show();
        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void Registration_Load(object sender, EventArgs e)
        {

        }
    }
}
