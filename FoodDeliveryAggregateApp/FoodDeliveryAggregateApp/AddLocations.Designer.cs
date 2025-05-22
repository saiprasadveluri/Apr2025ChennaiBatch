namespace FoodDeliveryAggregateApp
{
    partial class AddLocations
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
            this.locId = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.btnSave = new System.Windows.Forms.Button();
            this.locName = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // LocationId
            // 
            this.LocationId.AutoSize = true;
            this.LocationId.Location = new System.Drawing.Point(135, 46);
            this.LocationId.Name = "LocationId";
            this.LocationId.Size = new System.Drawing.Size(60, 13);
            this.LocationId.TabIndex = 0;
            this.LocationId.Text = "Location Id";
//            this.LocationId.Click += new System.EventHandler(this.LocationId_Click);
            // 
            // locId
            // 
            this.locId.Location = new System.Drawing.Point(247, 46);
            this.locId.Name = "locId";
            this.locId.Size = new System.Drawing.Size(100, 20);
            this.locId.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(146, 88);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(53, 13);
            this.label1.TabIndex = 2;
            this.label1.Text = "Locations";
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(247, 142);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(75, 23);
            this.btnSave.TabIndex = 4;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            this.btnSave.Click += new System.EventHandler(this.btnSave_Click);
            // 
            // locName
            // 
            this.locName.Location = new System.Drawing.Point(258, 88);
            this.locName.Name = "locName";
            this.locName.Size = new System.Drawing.Size(100, 20);
            this.locName.TabIndex = 5;
            // 
            // AddLocations
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.locName);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.locId);
            this.Controls.Add(this.LocationId);
            this.Name = "AddLocations";
            this.Text = "AddLocations";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LocationId;
        private System.Windows.Forms.TextBox locId;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnSave;
        private System.Windows.Forms.TextBox locName;
    }
}