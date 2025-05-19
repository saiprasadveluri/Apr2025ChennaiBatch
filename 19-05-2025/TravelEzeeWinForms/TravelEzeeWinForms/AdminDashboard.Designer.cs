namespace TravelEzeeWinForms
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
            this.LocationsBox = new System.Windows.Forms.GroupBox();
            this.BtnAddLocation = new System.Windows.Forms.Button();
            this.gridLocations = new System.Windows.Forms.DataGridView();
            this.ServicesBox = new System.Windows.Forms.GroupBox();
            this.BtnAddServices = new System.Windows.Forms.Button();
            this.gridServices = new System.Windows.Forms.DataGridView();
            this.LocationsBox.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridLocations)).BeginInit();
            this.ServicesBox.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridServices)).BeginInit();
            this.SuspendLayout();
            // 
            // LocationsBox
            // 
            this.LocationsBox.Controls.Add(this.BtnAddLocation);
            this.LocationsBox.Controls.Add(this.gridLocations);
            this.LocationsBox.Location = new System.Drawing.Point(51, 36);
            this.LocationsBox.Name = "LocationsBox";
            this.LocationsBox.Size = new System.Drawing.Size(939, 211);
            this.LocationsBox.TabIndex = 0;
            this.LocationsBox.TabStop = false;
            this.LocationsBox.Text = "Locations";
            // 
            // BtnAddLocation
            // 
            this.BtnAddLocation.Location = new System.Drawing.Point(556, 139);
            this.BtnAddLocation.Name = "BtnAddLocation";
            this.BtnAddLocation.Size = new System.Drawing.Size(128, 34);
            this.BtnAddLocation.TabIndex = 1;
            this.BtnAddLocation.Text = "BtnAddLocation";
            this.BtnAddLocation.UseVisualStyleBackColor = true;
            this.BtnAddLocation.Click += new System.EventHandler(this.BtnAddLocation_Click);
            // 
            // gridLocations
            // 
            this.gridLocations.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridLocations.Location = new System.Drawing.Point(66, 44);
            this.gridLocations.Name = "gridLocations";
            this.gridLocations.RowHeadersWidth = 51;
            this.gridLocations.RowTemplate.Height = 24;
            this.gridLocations.Size = new System.Drawing.Size(437, 130);
            this.gridLocations.TabIndex = 0;
            // 
            // ServicesBox
            // 
            this.ServicesBox.Controls.Add(this.BtnAddServices);
            this.ServicesBox.Controls.Add(this.gridServices);
            this.ServicesBox.Location = new System.Drawing.Point(51, 278);
            this.ServicesBox.Name = "ServicesBox";
            this.ServicesBox.Size = new System.Drawing.Size(939, 189);
            this.ServicesBox.TabIndex = 1;
            this.ServicesBox.TabStop = false;
            this.ServicesBox.Text = "Services";
            // 
            // BtnAddServices
            // 
            this.BtnAddServices.Location = new System.Drawing.Point(556, 125);
            this.BtnAddServices.Name = "BtnAddServices";
            this.BtnAddServices.Size = new System.Drawing.Size(128, 36);
            this.BtnAddServices.TabIndex = 1;
            this.BtnAddServices.Text = "BtnAddServices";
            this.BtnAddServices.UseVisualStyleBackColor = true;
            this.BtnAddServices.Click += new System.EventHandler(this.BtnAddServices_Click);
            // 
            // gridServices
            // 
            this.gridServices.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridServices.Location = new System.Drawing.Point(66, 40);
            this.gridServices.Name = "gridServices";
            this.gridServices.RowHeadersWidth = 51;
            this.gridServices.RowTemplate.Height = 24;
            this.gridServices.Size = new System.Drawing.Size(437, 122);
            this.gridServices.TabIndex = 0;
            // 
            // AdminDashboard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1043, 522);
            this.Controls.Add(this.ServicesBox);
            this.Controls.Add(this.LocationsBox);
            this.Name = "AdminDashboard";
            this.Text = "AdminDashboard";
            this.Load += new System.EventHandler(this.AdminDashboard_Load);
            this.LocationsBox.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridLocations)).EndInit();
            this.ServicesBox.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridServices)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox LocationsBox;
        private System.Windows.Forms.DataGridView gridLocations;
        private System.Windows.Forms.Button BtnAddLocation;
        private System.Windows.Forms.GroupBox ServicesBox;
        private System.Windows.Forms.DataGridView gridServices;
        private System.Windows.Forms.Button BtnAddServices;
    }
}