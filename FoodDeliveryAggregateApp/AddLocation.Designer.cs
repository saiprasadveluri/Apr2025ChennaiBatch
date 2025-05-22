namespace FoodDeliveryAggregateApp
{
    partial class AddLocation
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
            this.LocationId = new System.Windows.Forms.Label();
            this.Location = new System.Windows.Forms.Label();
            this.Id = new System.Windows.Forms.TextBox();
            this.Name = new System.Windows.Forms.ComboBox();
            this.btnSave = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LocationId
            // 
            this.LocationId.AutoSize = true;
            this.LocationId.Location = new System.Drawing.Point(114, 47);
            this.LocationId.Name = "LocationId";
            this.LocationId.Size = new System.Drawing.Size(60, 13);
            this.LocationId.TabIndex = 0;
            this.LocationId.Text = "Location Id";
            // 
            // Location
            // 
            this.Location.AutoSize = true;
            this.Location.Location = new System.Drawing.Point(114, 87);
            this.Location.Name = "Location";
            this.Location.Size = new System.Drawing.Size(48, 13);
            this.Location.TabIndex = 1;
            this.Location.Text = "Location";
            // 
            // Id
            // 
            this.Id.Location = new System.Drawing.Point(230, 47);
            this.Id.Name = "Id";
            this.Id.Size = new System.Drawing.Size(152, 20);
            this.Id.TabIndex = 2;
            // 
            // Name
            // 
            this.Name.FormattingEnabled = true;
            this.Name.Items.AddRange(new object[] {
            "Hyd",
            "Mlg",
            "Srpt"});
            this.Name.Location = new System.Drawing.Point(230, 87);
            this.Name.Name = "Name";
            this.Name.Size = new System.Drawing.Size(137, 21);
            this.Name.TabIndex = 3;
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(251, 164);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(75, 23);
            this.btnSave.TabIndex = 4;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            this.btnSave.Click += new System.EventHandler(this.btnSave_Click);
            // 
            // AddLocation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(762, 450);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.Name);
            this.Controls.Add(this.Id);
            this.Controls.Add(this.Location);
            this.Controls.Add(this.LocationId);
           // this.Name = "AddLocation";
            this.Text = "AddLocation";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LocationId;
        private System.Windows.Forms.Label Location;
        private System.Windows.Forms.TextBox Id;
        private System.Windows.Forms.ComboBox Name;
        private System.Windows.Forms.Button btnSave;
    }
}