namespace TravelEzeeForms
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
            groupBox1 = new GroupBox();
            GridLocation = new DataGridView();
            groupBox2 = new GroupBox();
            GridService = new DataGridView();
            AddNewLocation = new Button();
            AddNewService = new Button();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)GridLocation).BeginInit();
            groupBox2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)GridService).BeginInit();
            SuspendLayout();
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(GridLocation);
            groupBox1.Location = new Point(27, 33);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(593, 213);
            groupBox1.TabIndex = 0;
            groupBox1.TabStop = false;
            groupBox1.Text = "Location";
            // 
            // GridLocation
            // 
            GridLocation.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            GridLocation.Location = new Point(15, 26);
            GridLocation.Name = "GridLocation";
            GridLocation.RowHeadersWidth = 51;
            GridLocation.Size = new Size(558, 168);
            GridLocation.TabIndex = 0;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(GridService);
            groupBox2.Location = new Point(27, 252);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(593, 233);
            groupBox2.TabIndex = 1;
            groupBox2.TabStop = false;
            groupBox2.Text = "Services";
            // 
            // GridService
            // 
            GridService.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            GridService.Location = new Point(6, 28);
            GridService.Name = "GridService";
            GridService.RowHeadersWidth = 51;
            GridService.Size = new Size(567, 188);
            GridService.TabIndex = 0;
            // 
            // AddNewLocation
            // 
            AddNewLocation.Location = new Point(736, 117);
            AddNewLocation.Name = "AddNewLocation";
            AddNewLocation.Size = new Size(169, 29);
            AddNewLocation.TabIndex = 2;
            AddNewLocation.Text = "Add New Location";
            AddNewLocation.UseVisualStyleBackColor = true;
            AddNewLocation.Click += AddNewLocation_Click;
            // 
            // AddNewService
            // 
            AddNewService.Location = new Point(736, 322);
            AddNewService.Name = "AddNewService";
            AddNewService.Size = new Size(169, 29);
            AddNewService.TabIndex = 3;
            AddNewService.Text = "Add New Service";
            AddNewService.UseVisualStyleBackColor = true;
            AddNewService.Click += AddNewService_Click;
            // 
            // AdminDashboard
            // 
            ClientSize = new Size(1032, 497);
            Controls.Add(AddNewService);
            Controls.Add(AddNewLocation);
            Controls.Add(groupBox2);
            Controls.Add(groupBox1);
            MaximizeBox = false;
            MinimizeBox = false;
            Name = "AdminDashboard";
            Load += AdminDashboard_Load;
            groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)GridLocation).EndInit();
            groupBox2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)GridService).EndInit();
            ResumeLayout(false);

            //SuspendLayout();
            // 
            // groupBox1
            // 

            // 
            // AdminDashboard
            // 

        }

        #endregion


        private GroupBox groupBox1;
        private DataGridView GridLocation;
        private GroupBox groupBox2;
        private DataGridView GridService;
        private Button AddNewLocation;
        private Button AddNewService;
    }
}