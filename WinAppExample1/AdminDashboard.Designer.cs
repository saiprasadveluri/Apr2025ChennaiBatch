namespace WinAppExample1
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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.gridLocations = new System.Windows.Forms.DataGridView();
            this.btnAddLocation = new System.Windows.Forms.Button();
            this.Services = new System.Windows.Forms.GroupBox();
            this.gridServices = new System.Windows.Forms.DataGridView();
            this.BtnAddServices = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridLocations)).BeginInit();
            this.Services.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridServices)).BeginInit();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btnAddLocation);
            this.groupBox1.Controls.Add(this.gridLocations);
            this.groupBox1.Location = new System.Drawing.Point(95, 39);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(620, 169);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Locations";
            // 
            // gridLocations
            // 
            this.gridLocations.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridLocations.Location = new System.Drawing.Point(59, 21);
            this.gridLocations.Name = "gridLocations";
            this.gridLocations.RowHeadersWidth = 51;
            this.gridLocations.RowTemplate.Height = 24;
            this.gridLocations.Size = new System.Drawing.Size(404, 150);
            this.gridLocations.TabIndex = 0;
            // 
            // btnAddLocation
            // 
            this.btnAddLocation.Location = new System.Drawing.Point(485, 113);
            this.btnAddLocation.Name = "btnAddLocation";
            this.btnAddLocation.Size = new System.Drawing.Size(129, 23);
            this.btnAddLocation.TabIndex = 1;
            this.btnAddLocation.Text = "BtnAddLocation";
            this.btnAddLocation.UseVisualStyleBackColor = true;
            this.btnAddLocation.Click += new System.EventHandler(this.btnAddLocation_Click);
            // 
            // Services
            // 
            this.Services.Controls.Add(this.BtnAddServices);
            this.Services.Controls.Add(this.gridServices);
            this.Services.Location = new System.Drawing.Point(95, 232);
            this.Services.Name = "Services";
            this.Services.Size = new System.Drawing.Size(614, 159);
            this.Services.TabIndex = 1;
            this.Services.TabStop = false;
            this.Services.Text = "Services";
            // 
            // gridServices
            // 
            this.gridServices.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridServices.Location = new System.Drawing.Point(38, 21);
            this.gridServices.Name = "gridServices";
            this.gridServices.RowHeadersWidth = 51;
            this.gridServices.RowTemplate.Height = 24;
            this.gridServices.Size = new System.Drawing.Size(425, 138);
            this.gridServices.TabIndex = 0;
            // 
            // BtnAddServices
            // 
            this.BtnAddServices.Location = new System.Drawing.Point(485, 110);
            this.BtnAddServices.Name = "BtnAddServices";
            this.BtnAddServices.Size = new System.Drawing.Size(129, 23);
            this.BtnAddServices.TabIndex = 1;
            this.BtnAddServices.Text = "BtnAddServices";
            this.BtnAddServices.UseVisualStyleBackColor = true;
            // 
            // AdminDashboard
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.Services);
            this.Controls.Add(this.groupBox1);
            this.Name = "AdminDashboard";
            this.Text = "AdminDashboard";
            this.Load += new System.EventHandler(this.AdminDashboard_Load);
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridLocations)).EndInit();
            this.Services.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridServices)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btnAddLocation;
        private System.Windows.Forms.DataGridView gridLocations;
        private System.Windows.Forms.GroupBox Services;
        private System.Windows.Forms.Button BtnAddServices;
        private System.Windows.Forms.DataGridView gridServices;
    }
}