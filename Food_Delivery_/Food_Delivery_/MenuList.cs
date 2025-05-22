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
    public partial class MenuList : Form
    {
        public MenuList()
        {
            InitializeComponent();
        }

        private void MenuList_Load(object sender, EventArgs e)
        {

        }

        public class Menu
        {
            public int RId { get; set; }
            public int MenuId { get; set; }
            public string MenuName { get; set; }
            public string MenuType { get; set; }
            public string MenuPrice { get; set; }
            //public string MenuDescription { get; set; }
        }

        public void SetLabelText(int rid, int mid, string name, string price,string type)
        {
            List<Menu> list = new List<Menu>()
            {
                new Menu() { RId = rid, MenuId = mid, MenuName = name, MenuPrice = price , MenuType = type}
            };
            dataGridView1.DataSource = list;
        }
    }
}
