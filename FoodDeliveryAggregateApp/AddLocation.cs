using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public partial class AddLocation : Form
    {
        private DataProvider _dataProvider;
        public AddLocation(DataProvider dataProvider)
        {
            _dataProvider = dataProvider;
            InitializeComponent();
        }

        private void btnSave_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Id.Text) || string.IsNullOrEmpty(Name.Text))
            {
                MessageBox.Show("Enter Details");
            }
            else
            {
                Location Loc = new Location();
                Loc.Id = int.Parse(Id.Text);
                Loc.Name = Name.Text;
                _dataProvider.NewLocation(Loc);
                MessageBox.Show("Location Added Successfully");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
    }

