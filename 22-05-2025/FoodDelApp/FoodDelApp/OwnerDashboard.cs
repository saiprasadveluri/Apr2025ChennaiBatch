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
    public partial class OwnerDashboard : Form
    {
        public User currentUser;
        public OwnerDashboard(User user)
        {

            InitializeComponent();
            currentUser = user;

        }


    }
}
