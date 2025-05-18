namespace TravelEzeeForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void LogIn_Click(object sender, EventArgs e)
        {
            string email = EmailId.Text;
            string Password = Password1.Text;
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(Password))
            {
                MessageBox.Show("Please enter the credentials");
                return;
            }
            this.Visible = false;
            AdminDashboard adminDashboard = new AdminDashboard();
            adminDashboard.ShowDialog();
            this.Visible = true;
        }
    }
}
