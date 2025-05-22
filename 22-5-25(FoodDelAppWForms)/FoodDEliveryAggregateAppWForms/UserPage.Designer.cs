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
            this.mIDDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dISHNAMEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.rESTAURANTINFODataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.pRICEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dISHTYPEDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.qTYDataGridViewTextBoxColumn = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.menuItemBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.mphasisFoodDelDbDataSet2 = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet2();
            this.menuItemTableAdapter = new FoodDEliveryAggregateAppWForms.MphasisFoodDelDbDataSet2TableAdapters.MenuItemTableAdapter();
            ((System.ComponentModel.ISupportInitialize)(this.MenuGrid)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet2)).BeginInit();
            this.SuspendLayout();
            // 
            // MenuItems
            // 
            this.MenuItems.AutoSize = true;
            this.MenuItems.Location = new System.Drawing.Point(17, 16);
            this.MenuItems.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.MenuItems.Name = "MenuItems";
            this.MenuItems.Size = new System.Drawing.Size(75, 16);
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
            this.MenuGrid.Location = new System.Drawing.Point(21, 60);
            this.MenuGrid.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.MenuGrid.Name = "MenuGrid";
            this.MenuGrid.RowHeadersWidth = 51;
            this.MenuGrid.Size = new System.Drawing.Size(857, 175);
            this.MenuGrid.TabIndex = 1;
            this.MenuGrid.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.MenuGrid_CellContentClick);
            // 
            // mIDDataGridViewTextBoxColumn
            // 
            this.mIDDataGridViewTextBoxColumn.DataPropertyName = "MID";
            this.mIDDataGridViewTextBoxColumn.HeaderText = "MID";
            this.mIDDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.mIDDataGridViewTextBoxColumn.Name = "mIDDataGridViewTextBoxColumn";
            this.mIDDataGridViewTextBoxColumn.Width = 125;
            // 
            // dISHNAMEDataGridViewTextBoxColumn
            // 
            this.dISHNAMEDataGridViewTextBoxColumn.DataPropertyName = "DISHNAME";
            this.dISHNAMEDataGridViewTextBoxColumn.HeaderText = "DISHNAME";
            this.dISHNAMEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.dISHNAMEDataGridViewTextBoxColumn.Name = "dISHNAMEDataGridViewTextBoxColumn";
            this.dISHNAMEDataGridViewTextBoxColumn.Width = 125;
            // 
            // rESTAURANTINFODataGridViewTextBoxColumn
            // 
            this.rESTAURANTINFODataGridViewTextBoxColumn.DataPropertyName = "RESTAURANTINFO";
            this.rESTAURANTINFODataGridViewTextBoxColumn.HeaderText = "RESTAURANTINFO";
            this.rESTAURANTINFODataGridViewTextBoxColumn.MinimumWidth = 6;
            this.rESTAURANTINFODataGridViewTextBoxColumn.Name = "rESTAURANTINFODataGridViewTextBoxColumn";
            this.rESTAURANTINFODataGridViewTextBoxColumn.Width = 125;
            // 
            // pRICEDataGridViewTextBoxColumn
            // 
            this.pRICEDataGridViewTextBoxColumn.DataPropertyName = "PRICE";
            this.pRICEDataGridViewTextBoxColumn.HeaderText = "PRICE";
            this.pRICEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.pRICEDataGridViewTextBoxColumn.Name = "pRICEDataGridViewTextBoxColumn";
            this.pRICEDataGridViewTextBoxColumn.Width = 125;
            // 
            // dISHTYPEDataGridViewTextBoxColumn
            // 
            this.dISHTYPEDataGridViewTextBoxColumn.DataPropertyName = "DISHTYPE";
            this.dISHTYPEDataGridViewTextBoxColumn.HeaderText = "DISHTYPE";
            this.dISHTYPEDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.dISHTYPEDataGridViewTextBoxColumn.Name = "dISHTYPEDataGridViewTextBoxColumn";
            this.dISHTYPEDataGridViewTextBoxColumn.Width = 125;
            // 
            // qTYDataGridViewTextBoxColumn
            // 
            this.qTYDataGridViewTextBoxColumn.DataPropertyName = "QTY";
            this.qTYDataGridViewTextBoxColumn.HeaderText = "QTY";
            this.qTYDataGridViewTextBoxColumn.MinimumWidth = 6;
            this.qTYDataGridViewTextBoxColumn.Name = "qTYDataGridViewTextBoxColumn";
            this.qTYDataGridViewTextBoxColumn.Width = 125;
            // 
            // menuItemBindingSource
            // 
            this.menuItemBindingSource.DataMember = "MenuItem";
            this.menuItemBindingSource.DataSource = this.mphasisFoodDelDbDataSet2;
            // 
            // mphasisFoodDelDbDataSet2
            // 
            this.mphasisFoodDelDbDataSet2.DataSetName = "MphasisFoodDelDbDataSet2";
            this.mphasisFoodDelDbDataSet2.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // menuItemTableAdapter
            // 
            this.menuItemTableAdapter.ClearBeforeFill = true;
            // 
            // UserPage
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1067, 554);
            this.Controls.Add(this.MenuGrid);
            this.Controls.Add(this.MenuItems);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "UserPage";
            this.Text = "UserPage";
            this.Load += new System.EventHandler(this.UserPage_Load);
            ((System.ComponentModel.ISupportInitialize)(this.MenuGrid)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.menuItemBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.mphasisFoodDelDbDataSet2)).EndInit();
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