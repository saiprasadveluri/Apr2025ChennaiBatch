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
    public partial class AdminPage : Form
    {
        public AdminPage()
        {
            InitializeComponent();
        }

        private void AdminPage_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'mphasisFoodDelDbDataSet1.USERINFO' table. You can move, or remove it, as needed.
            this.uSERINFOTableAdapter.Fill(this.mphasisFoodDelDbDataSet1.USERINFO);
            // TODO: This line of code loads data into the 'mphasisFoodDelDbDataSet.Restaurant' table. You can move, or remove it, as needed.
            this.restaurantTableAdapter.Fill(this.mphasisFoodDelDbDataSet.Restaurant);

        }

        private void addNewRest_Click(object sender, EventArgs e)
        {

        }

        private void RestInfoGrid_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
