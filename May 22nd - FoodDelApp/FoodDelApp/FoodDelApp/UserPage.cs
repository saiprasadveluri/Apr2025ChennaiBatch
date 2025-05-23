using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDEliveryAggregateAppWForms
{
    public partial class UserPage : Form
    {
        public UserPage()
        {
            InitializeComponent();
        }

        private void UserPage_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'mphasisFoodDelDbDataSet2.MenuItem' table. You can move, or remove it, as needed.
            this.menuItemTableAdapter.Fill(this.mphasisFoodDelDbDataSet2.MenuItem);

        }
    }
}
