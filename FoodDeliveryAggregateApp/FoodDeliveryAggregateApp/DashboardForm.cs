using System;
using System.Windows.Forms;

namespace FoodDeliveryAggregateApp
{
    public class DashboardForm : Form
    {
        private Label lblWelcome;
        private Button btnViewRestaurants;
        private Button btnPlaceOrder;
        private Button btnLogout;

        public DashboardForm()
        {
            InitializeComponent();
            LoadDashboardUI();
        }

        private void InitializeComponent()
        {
            this.Text = "Dashboard";
            this.Size = new System.Drawing.Size(400, 300);
        }

        private void LoadDashboardUI()
        {
            // Welcome Label
            lblWelcome = new Label();
            lblWelcome.AutoSize = true;
            lblWelcome.Font = new System.Drawing.Font("Arial", 14F, System.Drawing.FontStyle.Bold);
            lblWelcome.Location = new System.Drawing.Point(50, 30);
            lblWelcome.Text = "Welcome to the Food Delivery App!";
            this.Controls.Add(lblWelcome);

            // View Restaurants Button
            btnViewRestaurants = new Button();
            btnViewRestaurants.Text = "View Restaurants";
            btnViewRestaurants.Location = new System.Drawing.Point(50, 80);
            btnViewRestaurants.Click += new EventHandler(this.btnViewRestaurants_Click);
            this.Controls.Add(btnViewRestaurants);

            // Place Order Button
            btnPlaceOrder = new Button();
            btnPlaceOrder.Text = "Place Order";
            btnPlaceOrder.Location = new System.Drawing.Point(50, 130);
            btnPlaceOrder.Click += new EventHandler(this.btnPlaceOrder_Click);
            this.Controls.Add(btnPlaceOrder);

            // Logout Button
            btnLogout = new Button();
            btnLogout.Text = "Logout";
            btnLogout.Location = new System.Drawing.Point(50, 180);
            btnLogout.Click += new EventHandler(this.btnLogout_Click);
            this.Controls.Add(btnLogout);
        }

        private void btnViewRestaurants_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Redirecting to Restaurant List...");
            RestaurantForm restaurantForm = new RestaurantForm();
            restaurantForm.Show();
            this.Hide(); // Hide Dashboard Form
        }

        private void btnPlaceOrder_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Redirecting to Order Placement...");
            OrderForm orderForm = new OrderForm();
            orderForm.Show();
            this.Hide(); // Hide Dashboard Form
        }

        private void btnLogout_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Logging out...");
            this.Close(); // Close Dashboard Form
            Form1 loginForm = new Form1();
            loginForm.Show(); // Redirect back to Login Form
        }
    }
}
