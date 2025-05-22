namespace FoodDeliveryAggregateApp
{
    partial class AdminDashboard
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.addRestaurantToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.addOrdersToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.addLocationsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.gridRestaurant = new System.Windows.Forms.DataGridView();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.gridLocation = new System.Windows.Forms.DataGridView();
            this.menuStrip1.SuspendLayout();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridRestaurant)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridLocation)).BeginInit();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.addRestaurantToolStripMenuItem,
            this.addLocationsToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(800, 24);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // addRestaurantToolStripMenuItem
            // 
            this.addRestaurantToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.addOrdersToolStripMenuItem});
            this.addRestaurantToolStripMenuItem.Name = "addRestaurantToolStripMenuItem";
            this.addRestaurantToolStripMenuItem.Size = new System.Drawing.Size(97, 20);
            this.addRestaurantToolStripMenuItem.Text = "AddRestaurant";
            // 
            // addOrdersToolStripMenuItem
            // 
            this.addOrdersToolStripMenuItem.Name = "addOrdersToolStripMenuItem";
            this.addOrdersToolStripMenuItem.Size = new System.Drawing.Size(131, 22);
            this.addOrdersToolStripMenuItem.Text = "AddOrders";
            // 
            // addLocationsToolStripMenuItem
            // 
            this.addLocationsToolStripMenuItem.Name = "addLocationsToolStripMenuItem";
            this.addLocationsToolStripMenuItem.Size = new System.Drawing.Size(92, 20);
            this.addLocationsToolStripMenuItem.Text = "AddLocations";
            this.addLocationsToolStripMenuItem.Click += new System.EventHandler(this.addLocationsToolStripMenuItem_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.gridRestaurant);
            this.groupBox1.Location = new System.Drawing.Point(72, 57);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(467, 129);
            this.groupBox1.TabIndex = 1;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Restaurant";
            // 
            // gridRestaurant
            // 
            this.gridRestaurant.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridRestaurant.Location = new System.Drawing.Point(6, 29);
            this.gridRestaurant.Name = "gridRestaurant";
            this.gridRestaurant.Size = new System.Drawing.Size(560, 125);
            this.gridRestaurant.TabIndex = 0;
            // 
            // groupBox2
            // 
            this.groupBox2.Location = new System.Drawing.Point(78, 217);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(200, 100);
            this.groupBox2.TabIndex = 2;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Location";
            // 
            // gridLocation
            // 
            this.gridLocation.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridLocation.Location = new System.Drawing.Point(84, 236);
            this.gridLocation.Name = "gridLocation";
            this.gridLocation.Size = new System.Drawing.Size(464, 142);
            this.gridLocation.TabIndex = 0;
            // 
            // AdminDashboard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.gridLocation);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "AdminDashboard";
            this.Text = "AdminDashboard";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridRestaurant)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridLocation)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem addRestaurantToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem addOrdersToolStripMenuItem;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.ToolStripMenuItem addLocationsToolStripMenuItem;
        private System.Windows.Forms.DataGridView gridRestaurant;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.DataGridView gridLocation;
    }
}