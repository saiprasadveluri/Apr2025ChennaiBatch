namespace FoodDEliveryAggregateAppWForms
{
    partial class UserPage
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
            this.MenuItems = new System.Windows.Forms.Label();
            this.MenuGrid = new System.Windows.Forms.DataGridView();
            this.mphasisFoodDelDbDataSet2 = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet2();
            this.menuItemBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.menuItemTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet2TableAdapters.MenuItemTableAdapter();
            this.mIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dISHNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rESTAURANTINFODataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pRICEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dISHTYPEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.qTYDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.MenuGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // MenuItems
            // 
            this.MenuItems.AutoSize = true;
            this.MenuItems.Location = new System.Drawing.Point(13, 13);
            this.MenuItems.Name = "MenuItems";
            this.MenuItems.Size = new System.Drawing.Size(62, 13);
            this.MenuItems.TabIndex = 0;
            this.MenuItems.Text = "Menu Items";
            // 
            // MenuGrid
            // 
            this.MenuGrid.AutoGenerateColumns = false;
            this.MenuGrid.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.MenuGrid.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.mIDDataGridViewTextBoxColumn,
            this.dISHNAMEDataGridViewTextBoxColumn,
            this.rESTAURANTINFODataGridViewTextBoxColumn,
            this.pRICEDataGridViewTextBoxColumn,
            this.dISHTYPEDataGridViewTextBoxColumn,
            this.qTYDataGridViewTextBoxColumn});
            this.MenuGrid.DataSource = this.menuItemBindingSource;
            this.MenuGrid.Location = new System.Drawing.Point(16, 49);
            this.MenuGrid.Name = "MenuGrid";
            this.MenuGrid.Size = new System.Drawing.Size(643, 142);
            this.MenuGrid.TabIndex = 1;
            // 
            // mphasisFoodDelDbDataSet2
            // 
            this.mphasisFoodDelDbDataSet2.DataSetName = "MphasisFoodDelDbDataSet2";
            this.mphasisFoodDelDbDataSet2.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // menuItemBindingSource
            // 
            this.menuItemBindingSource.DataMember = "MenuItem";
            this.menuItemBindingSource.DataSource = this.mphasisFoodDelDbDataSet2;
            // 
            // menuItemTableAdapter
            // 
            this.menuItemTableAdapter.ClearBeforeFill = true;
            // 
            // mIDDataGridViewTextBoxColumn
            // 
            this.mIDDataGridViewTextBoxColumn.DataPropertyName = "MID";
            this.mIDDataGridViewTextBoxColumn.HeaderText = "MID";
            this.mIDDataGridViewTextBoxColumn.Name = "mIDDataGridViewTextBoxColumn";
            // 
            // dISHNAMEDataGridViewTextBoxColumn
            // 
            this.dISHNAMEDataGridViewTextBoxColumn.DataPropertyName = "DISHNAME";
            this.dISHNAMEDataGridViewTextBoxColumn.HeaderText = "DISHNAME";
            this.dISHNAMEDataGridViewTextBoxColumn.Name = "dISHNAMEDataGridViewTextBoxColumn";
            // 
            // rESTAURANTINFODataGridViewTextBoxColumn
            // 
            this.rESTAURANTINFODataGridViewTextBoxColumn.DataPropertyName = "RESTAURANTINFO";
            this.rESTAURANTINFODataGridViewTextBoxColumn.HeaderText = "RESTAURANTINFO";
            this.rESTAURANTINFODataGridViewTextBoxColumn.Name = "rESTAURANTINFODataGridViewTextBoxColumn";
            // 
            // pRICEDataGridViewTextBoxColumn
            // 
            this.pRICEDataGridViewTextBoxColumn.DataPropertyName = "PRICE";
            this.pRICEDataGridViewTextBoxColumn.HeaderText = "PRICE";
            this.pRICEDataGridViewTextBoxColumn.Name = "pRICEDataGridViewTextBoxColumn";
            // 
            // dISHTYPEDataGridViewTextBoxColumn
            // 
            this.dISHTYPEDataGridViewTextBoxColumn.DataPropertyName = "DISHTYPE";
            this.dISHTYPEDataGridViewTextBoxColumn.HeaderText = "DISHTYPE";
            this.dISHTYPEDataGridViewTextBoxColumn.Name = "dISHTYPEDataGridViewTextBoxColumn";
            // 
            // qTYDataGridViewTextBoxColumn
            // 
            this.qTYDataGridViewTextBoxColumn.DataPropertyName = "QTY";
            this.qTYDataGridViewTextBoxColumn.HeaderText = "QTY";
            this.qTYDataGridViewTextBoxColumn.Name = "qTYDataGridViewTextBoxColumn";
            // 
            // UserPage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.MenuGrid);
            this.Controls.Add(this.MenuItems);
            this.Name = "UserPage";
            this.Text = "UserPage";
            this.Load += new System.EventHandler(this.UserPage_Load);
            ((System.ComponentModel.ISupportInitialize)(this.MenuGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label MenuItems;
        private System.Windows.Forms.DataGridView MenuGrid;
        private MphasisFoodDelDbDataSet2 mphasisFoodDelDbDataSet2;
        private System.Windows.Forms.BindingSource menuItemBindingSource;
        private MphasisFoodDelDbDataSet2TableAdapters.MenuItemTableAdapter menuItemTableAdapter;
        private System.Windows.Forms.DataGridViewTextBoxColumn mIDDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn dISHNAMEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn rESTAURANTINFODataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn pRICEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn dISHTYPEDataGridViewTextBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn qTYDataGridViewTextBoxColumn;
    }
}