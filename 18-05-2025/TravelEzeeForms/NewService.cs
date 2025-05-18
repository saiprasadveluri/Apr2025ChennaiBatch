using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.VisualBasic.Logging;
using TravelEzeeConsole;

namespace TravelEzeeForms
{
    public partial class NewService : Form
    {
        AdminModule _adminModule;
        public NewService(AdminModule admin)
        {
            _adminModule = admin;
            InitializeComponent();
        }

        private void Save_Click(object sender, EventArgs e)
        {
            if(string.IsNullOrEmpty(ServiceNumber.Text)||
                string.IsNullOrEmpty((FromLocation.Text))||
                string.IsNullOrEmpty(ToLocation.Text) || 
                string.IsNullOrEmpty(ServiceTypeId.Text) || 
                string.IsNullOrEmpty(TotalDistance.Text))
            {
                MessageBox.Show("enter details");
            }
            else
            {
                TravelEzeeConsole.Service  ser= new TravelEzeeConsole.Service();
                ser.ServiceNo = ServiceNumber.Text;
                ser.FromLocation = int.Parse(FromLocation.Text);
                ser.ToLocation=int.Parse(ToLocation.Text);
                ser.ServiceTypeId=int.Parse(ServiceTypeId.Text);
                ser.TotalDisatnce=double.Parse(TotalDistance.Text);
                _adminModule.AddNewService(ser);
                MessageBox.Show("Service Added");
                DialogResult = DialogResult.OK;
                this.Close();
            }
        }
    }
}
