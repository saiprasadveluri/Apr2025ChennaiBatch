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
    public partial class UserDashboard : Form
    {
        private User currentUser;
        public UserDashboard(User user)
        {
            InitializeComponent();
            currentUser = user;
        }
    }
}
