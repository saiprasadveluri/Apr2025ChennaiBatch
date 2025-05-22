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
    public partial class Restaurants : Form
    {
        public Restaurants()
        {
            InitializeComponent();
        }

        private void tableLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            
        }

        private void Restaurants_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            AddRestaurant addRestaurant = new AddRestaurant();
            addRestaurant.Show();
        }
        public class Rest
        {
            public int RId { get; set; }
            public string RestName { get; set; }
            public string Location { get; set; }
            public string OwnerName { get; set; }
            //public
        }
        public void SetLabelText(int rid, string name, string location, string owner)
        {
            List<Rest> list = new List<Rest>()
            {
                new Rest() { RId = rid, RestName = name, Location = location, OwnerName = owner }
            };
            dataGridView1.DataSource = list;
        }

        private void Menubtn_Click(object sender, EventArgs e)
        {
            MenuItems menuList = new MenuItems();
            menuList.Show();
        }
    }
}
