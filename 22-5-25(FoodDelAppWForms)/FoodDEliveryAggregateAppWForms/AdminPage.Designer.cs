namespace FoodDEliveryAggregateAppWForms
{
    partial class AdminPage
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
            this.components = new System.ComponentModel.Container();
            this.RestInfo = new System.Windows.Forms.Label();
            this.RestInfoGrid = new System.Windows.Forms.DataGridView();
            this.rIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rLOCATIONDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rOWNERDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.mINORDERVALUEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.restaurantBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.mphasisFoodDelDbDataSet = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet();
            this.restaurantTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSetTableAdapters.RestaurantTableAdapter();
            this.addNewRest = new System.Windows.Forms.Button();
            this.editRestInfo = new System.Windows.Forms.Button();
            this.delRest = new System.Windows.Forms.Button();
            this.UserInfo = new System.Windows.Forms.Label();
            this.UserInfoGrid = new System.Windows.Forms.DataGridView();
            this.uSERIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERROLEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.eMAILDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERPASSWORDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERLOCATIONDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pHNODataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERINFOBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.mphasisFoodDelDbDataSet1 = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet1();
            this.uSERINFOTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet1TableAdapters.USERINFOTableAdapter();
            this.AddUser = new System.Windows.Forms.Button();
            this.EditUser = new System.Windows.Forms.Button();
            this.DelUser = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.RestInfoGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.restaurantBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.UserInfoGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.uSERINFOBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet1)).BeginInit();
            this.SuspendLayout();
            // 
            // RestInfo
            // 
            this.RestInfo.AutoSize = true;
            this.RestInfo.Location = new System.Drawing.Point(33, 16);
            this.RestInfo.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.RestInfo.Name = "RestInfo";
            this.RestInfo.Size = new System.Drawing.Size(96, 16);
            this.RestInfo.TabIndex = 0;
            this.RestInfo.Text = "Restaurant Info";
            // 
            // RestInfoGrid
            // 
            this.RestInfoGrid.AutoGenerateColumns = false;
            this.RestInfoGrid.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.RestInfoGrid.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.rIDDataGridViewTextBoxColumn,
            this.rNAMEDataGridViewTextBoxColumn,
            this.rLOCATIONDataGridViewTextBoxColumn,
            this.rOWNERDataGridViewTextBoxColumn,
            this.mINORDERVALUEDataGridViewTextBoxColumn});
            this.RestInfoGrid.DataSource = this.restaurantBindingSource;
            this.RestInfoGrid.Location = new System.Drawing.Point(37, 52);
            this.RestInfoGrid.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.RestInfoGrid.Name = "RestInfoGrid";
            this.RestInfoGrid.RowHeadersWidth = 51;
            this.RestInfoGrid.Size = new System.Drawing.Size(724, 118);
            this.RestInfoGrid.TabIndex = 1;
            this.RestInfoGrid.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.RestInfoGrid_CellContentClick);
            // 
            // rIDDataGridViewTextBoxColumn
            // 
            this.rIDDataGridViewTextBoxColumn.DataPropertyName = "RID";
            this.rIDDataGridViewTextBoxColumn.HeaderText = "RID";
            this.rIDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.rIDDataGridViewTextBoxColumn.Name = "rIDDataGridViewTextBoxColumn";
            this.rIDDataGridViewTextBoxColumn.Width = 125;
            // 
            // rNAMEDataGridViewTextBoxColumn
            // 
            this.rNAMEDataGridViewTextBoxColumn.DataPropertyName = "RNAME";
            this.rNAMEDataGridViewTextBoxColumn.HeaderText = "RNAME";
            this.rNAMEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.rNAMEDataGridViewTextBoxColumn.Name = "rNAMEDataGridViewTextBoxColumn";
            this.rNAMEDataGridViewTextBoxColumn.Width = 125;
            // 
            // rLOCATIONDataGridViewTextBoxColumn
            // 
            this.rLOCATIONDataGridViewTextBoxColumn.DataPropertyName = "RLOCATION";
            this.rLOCATIONDataGridViewTextBoxColumn.HeaderText = "RLOCATION";
            this.rLOCATIONDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.rLOCATIONDataGridViewTextBoxColumn.Name = "rLOCATIONDataGridViewTextBoxColumn";
            this.rLOCATIONDataGridViewTextBoxColumn.Width = 125;
            // 
            // rOWNERDataGridViewTextBoxColumn
            // 
            this.rOWNERDataGridViewTextBoxColumn.DataPropertyName = "ROWNER";
            this.rOWNERDataGridViewTextBoxColumn.HeaderText = "ROWNER";
            this.rOWNERDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.rOWNERDataGridViewTextBoxColumn.Name = "rOWNERDataGridViewTextBoxColumn";
            this.rOWNERDataGridViewTextBoxColumn.Width = 125;
            // 
            // mINORDERVALUEDataGridViewTextBoxColumn
            // 
            this.mINORDERVALUEDataGridViewTextBoxColumn.DataPropertyName = "MINORDERVALUE";
            this.mINORDERVALUEDataGridViewTextBoxColumn.HeaderText = "MINORDERVALUE";
            this.mINORDERVALUEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.mINORDERVALUEDataGridViewTextBoxColumn.Name = "mINORDERVALUEDataGridViewTextBoxColumn";
            this.mINORDERVALUEDataGridViewTextBoxColumn.Width = 125;
            // 
            // restaurantBindingSource
            // 
            this.restaurantBindingSource.DataMember = "Restaurant";
            this.restaurantBindingSource.DataSource = this.mphasisFoodDelDbDataSet;
            // 
            // mphasisFoodDelDbDataSet
            // 
            this.mphasisFoodDelDbDataSet.DataSetName = "MphasisFoodDelDbDataSet";
            this.mphasisFoodDelDbDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // restaurantTableAdapter
            // 
            this.restaurantTableAdapter.ClearBeforeFill = true;
            // 
            // addNewRest
            // 
            this.addNewRest.Location = new System.Drawing.Point(37, 177);
            this.addNewRest.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.addNewRest.Name = "addNewRest";
            this.addNewRest.Size = new System.Drawing.Size(187, 28);
            this.addNewRest.TabIndex = 2;
            this.addNewRest.Text = "Add New Restaurant";
            this.addNewRest.UseVisualStyleBackColor = true;
            this.addNewRest.Click += new System.EventHandler(this.addNewRest_Click);
            // 
            // editRestInfo
            // 
            this.editRestInfo.Location = new System.Drawing.Point(319, 177);
            this.editRestInfo.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.editRestInfo.Name = "editRestInfo";
            this.editRestInfo.Size = new System.Drawing.Size(163, 28);
            this.editRestInfo.TabIndex = 3;
            this.editRestInfo.Text = "Edit Restaurant Info";
            this.editRestInfo.UseVisualStyleBackColor = true;
            // 
            // delRest
            // 
            this.delRest.Location = new System.Drawing.Point(593, 177);
            this.delRest.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.delRest.Name = "delRest";
            this.delRest.Size = new System.Drawing.Size(168, 28);
            this.delRest.TabIndex = 4;
            this.delRest.Text = "Delete Restaurant";
            this.delRest.UseVisualStyleBackColor = true;
            // 
            // UserInfo
            // 
            this.UserInfo.AutoSize = true;
            this.UserInfo.Location = new System.Drawing.Point(37, 233);
            this.UserInfo.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.UserInfo.Name = "UserInfo";
            this.UserInfo.Size = new System.Drawing.Size(60, 16);
            this.UserInfo.TabIndex = 5;
            this.UserInfo.Text = "User Info";
            // 
            // UserInfoGrid
            // 
            this.UserInfoGrid.AutoGenerateColumns = false;
            this.UserInfoGrid.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.UserInfoGrid.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.uSERIDDataGridViewTextBoxColumn,
            this.uSERNAMEDataGridViewTextBoxColumn,
            this.uSERROLEDataGridViewTextBoxColumn,
            this.eMAILDataGridViewTextBoxColumn,
            this.uSERPASSWORDDataGridViewTextBoxColumn,
            this.uSERLOCATIONDataGridViewTextBoxColumn,
            this.pHNODataGridViewTextBoxColumn});
            this.UserInfoGrid.DataSource = this.uSERINFOBindingSource;
            this.UserInfoGrid.Location = new System.Drawing.Point(41, 271);
            this.UserInfoGrid.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.UserInfoGrid.Name = "UserInfoGrid";
            this.UserInfoGrid.RowHeadersWidth = 51;
            this.UserInfoGrid.Size = new System.Drawing.Size(720, 117);
            this.UserInfoGrid.TabIndex = 6;
            // 
            // uSERIDDataGridViewTextBoxColumn
            // 
            this.uSERIDDataGridViewTextBoxColumn.DataPropertyName = "USERID";
            this.uSERIDDataGridViewTextBoxColumn.HeaderText = "USERID";
            this.uSERIDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.uSERIDDataGridViewTextBoxColumn.Name = "uSERIDDataGridViewTextBoxColumn";
            this.uSERIDDataGridViewTextBoxColumn.Width = 125;
            // 
            // uSERNAMEDataGridViewTextBoxColumn
            // 
            this.uSERNAMEDataGridViewTextBoxColumn.DataPropertyName = "USERNAME";
            this.uSERNAMEDataGridViewTextBoxColumn.HeaderText = "USERNAME";
            this.uSERNAMEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.uSERNAMEDataGridViewTextBoxColumn.Name = "uSERNAMEDataGridViewTextBoxColumn";
            this.uSERNAMEDataGridViewTextBoxColumn.Width = 125;
            // 
            // uSERROLEDataGridViewTextBoxColumn
            // 
            this.uSERROLEDataGridViewTextBoxColumn.DataPropertyName = "USERROLE";
            this.uSERROLEDataGridViewTextBoxColumn.HeaderText = "USERROLE";
            this.uSERROLEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.uSERROLEDataGridViewTextBoxColumn.Name = "uSERROLEDataGridViewTextBoxColumn";
            this.uSERROLEDataGridViewTextBoxColumn.Width = 125;
            // 
            // eMAILDataGridViewTextBoxColumn
            // 
            this.eMAILDataGridViewTextBoxColumn.DataPropertyName = "EMAIL";
            this.eMAILDataGridViewTextBoxColumn.HeaderText = "EMAIL";
            this.eMAILDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.eMAILDataGridViewTextBoxColumn.Name = "eMAILDataGridViewTextBoxColumn";
            this.eMAILDataGridViewTextBoxColumn.Width = 125;
            // 
            // uSERPASSWORDDataGridViewTextBoxColumn
            // 
            this.uSERPASSWORDDataGridViewTextBoxColumn.DataPropertyName = "USERPASSWORD";
            this.uSERPASSWORDDataGridViewTextBoxColumn.HeaderText = "USERPASSWORD";
            this.uSERPASSWORDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.uSERPASSWORDDataGridViewTextBoxColumn.Name = "uSERPASSWORDDataGridViewTextBoxColumn";
            this.uSERPASSWORDDataGridViewTextBoxColumn.Width = 125;
            // 
            // uSERLOCATIONDataGridViewTextBoxColumn
            // 
            this.uSERLOCATIONDataGridViewTextBoxColumn.DataPropertyName = "USERLOCATION";
            this.uSERLOCATIONDataGridViewTextBoxColumn.HeaderText = "USERLOCATION";
            this.uSERLOCATIONDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.uSERLOCATIONDataGridViewTextBoxColumn.Name = "uSERLOCATIONDataGridViewTextBoxColumn";
            this.uSERLOCATIONDataGridViewTextBoxColumn.Width = 125;
            // 
            // pHNODataGridViewTextBoxColumn
            // 
            this.pHNODataGridViewTextBoxColumn.DataPropertyName = "PHNO";
            this.pHNODataGridViewTextBoxColumn.HeaderText = "PHNO";
            this.pHNODataGridViewTextBoxColumn.MinimumWidth = 6;
            this.pHNODataGridViewTextBoxColumn.Name = "pHNODataGridViewTextBoxColumn";
            this.pHNODataGridViewTextBoxColumn.Width = 125;
            // 
            // uSERINFOBindingSource
            // 
            this.uSERINFOBindingSource.DataMember = "USERINFO";
            this.uSERINFOBindingSource.DataSource = this.mphasisFoodDelDbDataSet1;
            // 
            // mphasisFoodDelDbDataSet1
            // 
            this.mphasisFoodDelDbDataSet1.DataSetName = "MphasisFoodDelDbDataSet1";
            this.mphasisFoodDelDbDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // uSERINFOTableAdapter
            // 
            this.uSERINFOTableAdapter.ClearBeforeFill = true;
            // 
            // AddUser
            // 
            this.AddUser.Location = new System.Drawing.Point(41, 410);
            this.AddUser.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.AddUser.Name = "AddUser";
            this.AddUser.Size = new System.Drawing.Size(183, 28);
            this.AddUser.TabIndex = 7;
            this.AddUser.Text = "Add New User";
            this.AddUser.UseVisualStyleBackColor = true;
            // 
            // EditUser
            // 
            this.EditUser.Location = new System.Drawing.Point(319, 409);
            this.EditUser.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.EditUser.Name = "EditUser";
            this.EditUser.Size = new System.Drawing.Size(163, 28);
            this.EditUser.TabIndex = 8;
            this.EditUser.Text = "Edit User";
            this.EditUser.UseVisualStyleBackColor = true;
            // 
            // DelUser
            // 
            this.DelUser.Location = new System.Drawing.Point(593, 407);
            this.DelUser.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.DelUser.Name = "DelUser";
            this.DelUser.Size = new System.Drawing.Size(168, 28);
            this.DelUser.TabIndex = 9;
            this.DelUser.Text = "Delete User";
            this.DelUser.UseVisualStyleBackColor = true;
            // 
            // AdminPage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1067, 554);
            this.Controls.Add(this.DelUser);
            this.Controls.Add(this.EditUser);
            this.Controls.Add(this.AddUser);
            this.Controls.Add(this.UserInfoGrid);
            this.Controls.Add(this.UserInfo);
            this.Controls.Add(this.delRest);
            this.Controls.Add(this.editRestInfo);
            this.Controls.Add(this.addNewRest);
            this.Controls.Add(this.RestInfoGrid);
            this.Controls.Add(this.RestInfo);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "AdminPage";
            this.Text = "AdminPage";
            this.Load += new System.EventHandler(this.AdminPage_Load);
            ((System.ComponentModel.ISupportInitialize)(this.RestInfoGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.restaurantBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.UserInfoGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.uSERINFOBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label RestInfo;
        private System.Windows.Forms.DataGridView RestInfoGrid;
        private MphasisFoodDelDbDataSet mphasisFoodDelDbDataSet;
        private System.Windows.Forms.BindingSource restaurantBindingSource;
        private MphasisFoodDelDbDataSetTableAdapters.RestaurantTableAdapter restaurantTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn rIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn rNAMEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn rLOCATIONDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn rOWNERDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn mINORDERVALUEDataGridViewTextBoxColumn;
        private System.Windows.Forms.Button addNewRest;
        private System.Windows.Forms.Button editRestInfo;
        private System.Windows.Forms.Button delRest;
        private System.Windows.Forms.Label UserInfo;
        private System.Windows.Forms.DataGridView UserInfoGrid;
        private MphasisFoodDelDbDataSet1 mphasisFoodDelDbDataSet1;
        private System.Windows.Forms.BindingSource uSERINFOBindingSource;
        private MphasisFoodDelDbDataSet1TableAdapters.USERINFOTableAdapter uSERINFOTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn uSERIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uSERNAMEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uSERROLEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn eMAILDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uSERPASSWORDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn uSERLOCATIONDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pHNODataGridViewTextBoxColumn;
        private System.Windows.Forms.Button AddUser;
        private System.Windows.Forms.Button EditUser;
        private System.Windows.Forms.Button DelUser;
    }
}