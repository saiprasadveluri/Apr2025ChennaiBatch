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
            this.mphasisFoodDelDbDataSet = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet();
            this.restaurantBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.restaurantTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSetTableAdapters.RestaurantTableAdapter();
            this.rIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rLOCATIONDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rOWNERDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.mINORDERVALUEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.addNewRest = new System.Windows.Forms.Button();
            this.editRestInfo = new System.Windows.Forms.Button();
            this.delRest = new System.Windows.Forms.Button();
            this.UserInfo = new System.Windows.Forms.Label();
            this.UserInfoGrid = new System.Windows.Forms.DataGridView();
            this.mphasisFoodDelDbDataSet1 = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet1();
            this.uSERINFOBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.uSERINFOTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet1TableAdapters.USERINFOTableAdapter();
            this.uSERIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERROLEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.eMAILDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERPASSWORDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.uSERLOCATIONDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pHNODataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.AddUser = new System.Windows.Forms.Button();
            this.EditUser = new System.Windows.Forms.Button();
            this.DelUser = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.RestInfoGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.restaurantBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.UserInfoGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.uSERINFOBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // RestInfo
            // 
            this.RestInfo.AutoSize = true;
            this.RestInfo.Location = new System.Drawing.Point(25, 13);
            this.RestInfo.Name = "RestInfo";
            this.RestInfo.Size = new System.Drawing.Size(80, 13);
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
            this.RestInfoGrid.Location = new System.Drawing.Point(28, 42);
            this.RestInfoGrid.Name = "RestInfoGrid";
            this.RestInfoGrid.Size = new System.Drawing.Size(543, 96);
            this.RestInfoGrid.TabIndex = 1;
            // 
            // mphasisFoodDelDbDataSet
            // 
            this.mphasisFoodDelDbDataSet.DataSetName = "MphasisFoodDelDbDataSet";
            this.mphasisFoodDelDbDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // restaurantBindingSource
            // 
            this.restaurantBindingSource.DataMember = "Restaurant";
            this.restaurantBindingSource.DataSource = this.mphasisFoodDelDbDataSet;
            // 
            // restaurantTableAdapter
            // 
            this.restaurantTableAdapter.ClearBeforeFill = true;
            // 
            // rIDDataGridViewTextBoxColumn
            // 
            this.rIDDataGridViewTextBoxColumn.DataPropertyName = "RID";
            this.rIDDataGridViewTextBoxColumn.HeaderText = "RID";
            this.rIDDataGridViewTextBoxColumn.Name = "rIDDataGridViewTextBoxColumn";
            // 
            // rNAMEDataGridViewTextBoxColumn
            // 
            this.rNAMEDataGridViewTextBoxColumn.DataPropertyName = "RNAME";
            this.rNAMEDataGridViewTextBoxColumn.HeaderText = "RNAME";
            this.rNAMEDataGridViewTextBoxColumn.Name = "rNAMEDataGridViewTextBoxColumn";
            // 
            // rLOCATIONDataGridViewTextBoxColumn
            // 
            this.rLOCATIONDataGridViewTextBoxColumn.DataPropertyName = "RLOCATION";
            this.rLOCATIONDataGridViewTextBoxColumn.HeaderText = "RLOCATION";
            this.rLOCATIONDataGridViewTextBoxColumn.Name = "rLOCATIONDataGridViewTextBoxColumn";
            // 
            // rOWNERDataGridViewTextBoxColumn
            // 
            this.rOWNERDataGridViewTextBoxColumn.DataPropertyName = "ROWNER";
            this.rOWNERDataGridViewTextBoxColumn.HeaderText = "ROWNER";
            this.rOWNERDataGridViewTextBoxColumn.Name = "rOWNERDataGridViewTextBoxColumn";
            // 
            // mINORDERVALUEDataGridViewTextBoxColumn
            // 
            this.mINORDERVALUEDataGridViewTextBoxColumn.DataPropertyName = "MINORDERVALUE";
            this.mINORDERVALUEDataGridViewTextBoxColumn.HeaderText = "MINORDERVALUE";
            this.mINORDERVALUEDataGridViewTextBoxColumn.Name = "mINORDERVALUEDataGridViewTextBoxColumn";
            // 
            // addNewRest
            // 
            this.addNewRest.Location = new System.Drawing.Point(28, 144);
            this.addNewRest.Name = "addNewRest";
            this.addNewRest.Size = new System.Drawing.Size(140, 23);
            this.addNewRest.TabIndex = 2;
            this.addNewRest.Text = "Add New Restaurant";
            this.addNewRest.UseVisualStyleBackColor = true;
            this.addNewRest.Click += new System.EventHandler(this.addNewRest_Click);
            // 
            // editRestInfo
            // 
            this.editRestInfo.Location = new System.Drawing.Point(239, 144);
            this.editRestInfo.Name = "editRestInfo";
            this.editRestInfo.Size = new System.Drawing.Size(122, 23);
            this.editRestInfo.TabIndex = 3;
            this.editRestInfo.Text = "Edit Restaurant Info";
            this.editRestInfo.UseVisualStyleBackColor = true;
            // 
            // delRest
            // 
            this.delRest.Location = new System.Drawing.Point(445, 144);
            this.delRest.Name = "delRest";
            this.delRest.Size = new System.Drawing.Size(126, 23);
            this.delRest.TabIndex = 4;
            this.delRest.Text = "Delete Restaurant";
            this.delRest.UseVisualStyleBackColor = true;
            // 
            // UserInfo
            // 
            this.UserInfo.AutoSize = true;
            this.UserInfo.Location = new System.Drawing.Point(28, 189);
            this.UserInfo.Name = "UserInfo";
            this.UserInfo.Size = new System.Drawing.Size(50, 13);
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
            this.UserInfoGrid.Location = new System.Drawing.Point(31, 220);
            this.UserInfoGrid.Name = "UserInfoGrid";
            this.UserInfoGrid.Size = new System.Drawing.Size(540, 95);
            this.UserInfoGrid.TabIndex = 6;
            // 
            // mphasisFoodDelDbDataSet1
            // 
            this.mphasisFoodDelDbDataSet1.DataSetName = "MphasisFoodDelDbDataSet1";
            this.mphasisFoodDelDbDataSet1.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // uSERINFOBindingSource
            // 
            this.uSERINFOBindingSource.DataMember = "USERINFO";
            this.uSERINFOBindingSource.DataSource = this.mphasisFoodDelDbDataSet1;
            // 
            // uSERINFOTableAdapter
            // 
            this.uSERINFOTableAdapter.ClearBeforeFill = true;
            // 
            // uSERIDDataGridViewTextBoxColumn
            // 
            this.uSERIDDataGridViewTextBoxColumn.DataPropertyName = "USERID";
            this.uSERIDDataGridViewTextBoxColumn.HeaderText = "USERID";
            this.uSERIDDataGridViewTextBoxColumn.Name = "uSERIDDataGridViewTextBoxColumn";
            // 
            // uSERNAMEDataGridViewTextBoxColumn
            // 
            this.uSERNAMEDataGridViewTextBoxColumn.DataPropertyName = "USERNAME";
            this.uSERNAMEDataGridViewTextBoxColumn.HeaderText = "USERNAME";
            this.uSERNAMEDataGridViewTextBoxColumn.Name = "uSERNAMEDataGridViewTextBoxColumn";
            // 
            // uSERROLEDataGridViewTextBoxColumn
            // 
            this.uSERROLEDataGridViewTextBoxColumn.DataPropertyName = "USERROLE";
            this.uSERROLEDataGridViewTextBoxColumn.HeaderText = "USERROLE";
            this.uSERROLEDataGridViewTextBoxColumn.Name = "uSERROLEDataGridViewTextBoxColumn";
            // 
            // eMAILDataGridViewTextBoxColumn
            // 
            this.eMAILDataGridViewTextBoxColumn.DataPropertyName = "EMAIL";
            this.eMAILDataGridViewTextBoxColumn.HeaderText = "EMAIL";
            this.eMAILDataGridViewTextBoxColumn.Name = "eMAILDataGridViewTextBoxColumn";
            // 
            // uSERPASSWORDDataGridViewTextBoxColumn
            // 
            this.uSERPASSWORDDataGridViewTextBoxColumn.DataPropertyName = "USERPASSWORD";
            this.uSERPASSWORDDataGridViewTextBoxColumn.HeaderText = "USERPASSWORD";
            this.uSERPASSWORDDataGridViewTextBoxColumn.Name = "uSERPASSWORDDataGridViewTextBoxColumn";
            // 
            // uSERLOCATIONDataGridViewTextBoxColumn
            // 
            this.uSERLOCATIONDataGridViewTextBoxColumn.DataPropertyName = "USERLOCATION";
            this.uSERLOCATIONDataGridViewTextBoxColumn.HeaderText = "USERLOCATION";
            this.uSERLOCATIONDataGridViewTextBoxColumn.Name = "uSERLOCATIONDataGridViewTextBoxColumn";
            // 
            // pHNODataGridViewTextBoxColumn
            // 
            this.pHNODataGridViewTextBoxColumn.DataPropertyName = "PHNO";
            this.pHNODataGridViewTextBoxColumn.HeaderText = "PHNO";
            this.pHNODataGridViewTextBoxColumn.Name = "pHNODataGridViewTextBoxColumn";
            // 
            // AddUser
            // 
            this.AddUser.Location = new System.Drawing.Point(31, 333);
            this.AddUser.Name = "AddUser";
            this.AddUser.Size = new System.Drawing.Size(137, 23);
            this.AddUser.TabIndex = 7;
            this.AddUser.Text = "Add New User";
            this.AddUser.UseVisualStyleBackColor = true;
            // 
            // EditUser
            // 
            this.EditUser.Location = new System.Drawing.Point(239, 332);
            this.EditUser.Name = "EditUser";
            this.EditUser.Size = new System.Drawing.Size(122, 23);
            this.EditUser.TabIndex = 8;
            this.EditUser.Text = "Edit User";
            this.EditUser.UseVisualStyleBackColor = true;
            // 
            // DelUser
            // 
            this.DelUser.Location = new System.Drawing.Point(445, 331);
            this.DelUser.Name = "DelUser";
            this.DelUser.Size = new System.Drawing.Size(126, 23);
            this.DelUser.TabIndex = 9;
            this.DelUser.Text = "Delete User";
            this.DelUser.UseVisualStyleBackColor = true;
            // 
            // AdminPage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
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
            this.Name = "AdminPage";
            this.Text = "AdminPage";
            this.Load += new System.EventHandler(this.AdminPage_Load);
            ((System.ComponentModel.ISupportInitialize)(this.RestInfoGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.restaurantBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.UserInfoGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.uSERINFOBindingSource)).EndInit();
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