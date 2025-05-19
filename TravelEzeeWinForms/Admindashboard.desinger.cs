namespace TravelEzeeWinForms
{
    partial class AdminDashboard
    {
        private System.ComponentModel.IContainer components = null;

        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        private void InitializeComponent()
        {
            this.grpLocationSection = new System.Windows.Forms.GroupBox();
            this.btnCreateLocation = new System.Windows.Forms.Button();
            this.dgvLocationList = new System.Windows.Forms.DataGridView();
            this.grpServiceSection = new System.Windows.Forms.GroupBox();
            this.dgvServiceList = new System.Windows.Forms.DataGridView();
            
            this.grpLocationSection.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvLocationList)).BeginInit();
            this.grpServiceSection.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgvServiceList)).BeginInit();
            this.SuspendLayout();

            this.grpLocationSection.Controls.Add(this.btnCreateLocation);
            this.grpLocationSection.Controls.Add(this.dgvLocationList);
            this.grpLocationSection.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.grpLocationSection.Location = new System.Drawing.Point(12, 12);
            this.grpLocationSection.Name = "grpLocationSection";
            this.grpLocationSection.Size = new System.Drawing.Size(1130, 220);
            this.grpLocationSection.TabIndex = 0;
            this.grpLocationSection.TabStop = false;
            this.grpLocationSection.Text = "Locations";

            this.btnCreateLocation.Location = new System.Drawing.Point(405, 180);
            this.btnCreateLocation.Name = "btnCreateLocation";
            this.btnCreateLocation.Size = new System.Drawing.Size(220, 33);
            this.btnCreateLocation.TabIndex = 1;
            this.btnCreateLocation.Text = "Add Location";
            this.btnCreateLocation.UseVisualStyleBackColor = true;
            this.btnCreateLocation.Click += new System.EventHandler(this.btnAddLocation_Click);

            this.dgvLocationList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvLocationList.Location = new System.Drawing.Point(23, 25);
            this.dgvLocationList.Name = "dgvLocationList";
            this.dgvLocationList.Size = new System.Drawing.Size(1065, 150);
            this.dgvLocationList.TabIndex = 0;
            this.dgvLocationList.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellContentClick);

            this.grpServiceSection.Controls.Add(this.dgvServiceList);
            this.grpServiceSection.Font = new System.Drawing.Font("Microsoft Sans Serif", 12F);
            this.grpServiceSection.Location = new System.Drawing.Point(12, 250);
            this.grpServiceSection.Name = "grpServiceSection";
            this.grpServiceSection.Size = new System.Drawing.Size(1130, 230);
            this.grpServiceSection.TabIndex = 1;
            this.grpServiceSection.TabStop = false;
            this.grpServiceSection.Text = "Services";
            this.grpServiceSection.Enter += new System.EventHandler(this.groupBox2_Enter);

            this.dgvServiceList.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvServiceList.Location = new System.Drawing.Point(23, 26);
            this.dgvServiceList.Name = "dgvServiceList";
            this.dgvServiceList.Size = new System.Drawing.Size(1065, 150);
            this.dgvServiceList.TabIndex = 0;

            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1172, 509);
            this.Controls.Add(this.grpServiceSection);
            this.Controls.Add(this.grpLocationSection);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "AdminDashboard";
            this.Text = "Admin Dashboard";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.AdminDashboard_Load);

            this.grpLocationSection.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dgvLocationList)).EndInit();
            this.grpServiceSection.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.dgvServiceList)).EndInit();
            this.ResumeLayout(false);
        }

        #endregion

        private System.Windows.Forms.GroupBox grpLocationSection;
        private System.Windows.Forms.Button btnCreateLocation;
        private System.Windows.Forms.DataGridView dgvLocationList;
        private System.Windows.Forms.GroupBox grpServiceSection;
        private System.Windows.Forms.DataGridView dgvServiceList;
    }
}
