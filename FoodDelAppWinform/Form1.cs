using FoodDelAppWinform.Business;
using FoodDelAppWinform.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDelAppWinform
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            DataProvider.Instance.LoadData();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Owner uinfo = new Owner()
            {
                DisplayName = "Sai Durga",
                Email = "sai@sai.com",
                Password = "MyPassword"
            };
            DataProvider.Instance.AddUser(uinfo);
            Location location = new Location()
            {
                LocationName = "CHENNAI"
            };
            DataProvider.Instance.AddLocation(location);
            Restaurant restaurant = new Restaurant("A2B", uinfo, location); DataProvider.Instance.AddRestaurant(restaurant);
        }

        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            DataProvider.Instance.SaveToFile();
        }
    }
}
