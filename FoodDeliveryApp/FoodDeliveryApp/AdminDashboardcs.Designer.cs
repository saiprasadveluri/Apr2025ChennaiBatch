namespace FoodDeliveryApp
{
    partial class AdminDashboardcs
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
            this.SuspendLayout();
            // 
            // AdminDashboardcs
            // 
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Name = "AdminDashboardcs";
            this.Load += new System.EventHandler(this.AdminDashboardcs_Load);
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.GroupBox RestaurantsBox;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem addRestaurantToolStripMenuItem;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.ToolStripMenuItem addLocationToolStripMenuItem;
        private System.Windows.Forms.DataGridView LocationsGrid;
        private System.Windows.Forms.DataGridView RestaurantsGrid;
    }
}