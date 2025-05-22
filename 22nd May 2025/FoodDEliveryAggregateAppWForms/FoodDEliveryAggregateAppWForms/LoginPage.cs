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
    public partial class LoginPage : Form
    {
        public LoginPage()
        {
            InitializeComponent();
        }
        private void LoginPage_Load(object sender, EventArgs e)
        {
            
            
        }

        private void loginBtn_Click(object sender, EventArgs e)
        {
            List<Users> list = new List<Users>();
            list.Add(new Users()
            {
                UserId = 101,
                UserName = "Prem",
                UserEmail = "p@p.com",
                Password = "123456",
                Role = "ADMIN"
            });
            list.Add(new Users()
            {
                UserId = 102,
                UserName = "Sarath",
                UserEmail = "s@s.com",
                Password = "123456",
                Role = "USER"
            });
            list.Add(new Users()
            {
                UserId = 103,
                UserName = "Manoteja",
                UserEmail = "m@m.com",
                Password = "123456",
                Role = "OWNER"
            });
            string userEmail = uEmail.Text;
            string userPassword = uPaswd.Text;
            string Role = roleBox.SelectedItem.ToString();
            //List<Users> users = new List<Users>();
            foreach (Users u in list)
            {
                if (userEmail.Contains(u.UserEmail))
                {
                    if (u.UserEmail == userEmail && u.Password == userPassword)
                    {
                        if (u.Role == Role && u.Role == "ADMIN")
                        {
                            AdminPage adminPage = new AdminPage();
                            DialogResult = adminPage.ShowDialog();
                            break;
                        }
                        else if (u.Role == Role && u.Role == "USER")
                        {
                            UserPage userPage = new UserPage();
                            DialogResult = userPage.ShowDialog();
                            break;
                        }
                        else
                        {
                            MessageBox.Show("Role not matched");
                            break;
                        }
                        break;
                    }
                    else
                    {
                        MessageBox.Show("Invalid User Email or Password");
                        break;
                    }

                }
                continue;
                
            }


        }

        
    }
}
