using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Food_Delivery_
{
    public partial class UserData : Form
    {
        public UserData()
        {
            InitializeComponent();
        }

        public class User
        {
            public int UserId { get; set; }
            public string UserName { get; set; }
            public string UserEmail { get; set; }
            public string UserPassword { get; set; }
            public string Role { get; set; }
        }

        public void SetLabelText(int text, string name, string email, string pwd, string role)
        {
            List<User> list = new List<User>()
               {
                   new User() { UserId = text, UserName = name, UserEmail = email, UserPassword = pwd, Role = role }
               };
            dataGridView1.DataSource = list;
        }

        private void UserData_Load(object sender, EventArgs e)
        {
        }
    }
}
