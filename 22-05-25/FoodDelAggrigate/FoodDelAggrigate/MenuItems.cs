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
    public partial class MenuItems : Form
    {
        public MenuItems()
        {
            InitializeComponent();
        }

        private void textBox5_TextChanged(object sender, EventArgs e)
        {

        }

        private void btn1_Click(object sender, EventArgs e)
        {
            MenuList.Menu menuData = new MenuList.Menu();
            menuData.RId = Convert.ToInt32(textBox1.Text);
            menuData.MenuId = Convert.ToInt32(textBox5.Text);
            menuData.MenuName = textBox2.Text;
            menuData.MenuType = comboBox1.Text;
            menuData.MenuPrice = textBox4.Text;
            MenuList set = new MenuList();
            set.SetLabelText(menuData.RId, menuData.MenuId, menuData.MenuName, menuData.MenuPrice, menuData.MenuType);
            set.Show();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
