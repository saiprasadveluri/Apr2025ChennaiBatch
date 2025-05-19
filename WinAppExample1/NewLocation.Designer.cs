namespace WinAppExample1
{
    partial class NewLocation
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
            this.LocationIdLabel = new System.Windows.Forms.Label();
            this.txtLocId = new System.Windows.Forms.TextBox();
            this.NameLabel = new System.Windows.Forms.Label();
            this.txtLocName = new System.Windows.Forms.TextBox();
            this.btnOK = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LocationIdLabel
            // 
            this.LocationIdLabel.AutoSize = true;
            this.LocationIdLabel.Location = new System.Drawing.Point(66, 65);
            this.LocationIdLabel.Name = "LocationIdLabel";
            this.LocationIdLabel.Size = new System.Drawing.Size(69, 16);
            this.LocationIdLabel.TabIndex = 0;
            this.LocationIdLabel.Text = "LocationId";
            // 
            // txtLocId
            // 
            this.txtLocId.Location = new System.Drawing.Point(209, 62);
            this.txtLocId.Name = "txtLocId";
            this.txtLocId.Size = new System.Drawing.Size(198, 22);
            this.txtLocId.TabIndex = 1;
            // 
            // NameLabel
            // 
            this.NameLabel.AutoSize = true;
            this.NameLabel.Location = new System.Drawing.Point(87, 150);
            this.NameLabel.Name = "NameLabel";
            this.NameLabel.Size = new System.Drawing.Size(44, 16);
            this.NameLabel.TabIndex = 2;
            this.NameLabel.Text = "Name";
            // 
            // txtLocName
            // 
            this.txtLocName.Location = new System.Drawing.Point(200, 143);
            this.txtLocName.Name = "txtLocName";
            this.txtLocName.Size = new System.Drawing.Size(207, 22);
            this.txtLocName.TabIndex = 3;
            // 
            // btnOK
            // 
            this.btnOK.Location = new System.Drawing.Point(200, 270);
            this.btnOK.Name = "btnOK";
            this.btnOK.Size = new System.Drawing.Size(75, 23);
            this.btnOK.TabIndex = 4;
            this.btnOK.Text = "Save";
            this.btnOK.UseVisualStyleBackColor = true;
            this.btnOK.Click += new System.EventHandler(this.btnOK_Click);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(420, 270);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(75, 23);
            this.btnCancel.TabIndex = 5;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // NewLocation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.btnOK);
            this.Controls.Add(this.txtLocName);
            this.Controls.Add(this.NameLabel);
            this.Controls.Add(this.txtLocId);
            this.Controls.Add(this.LocationIdLabel);
            this.Name = "NewLocation";
            this.Text = "NewLocation";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LocationIdLabel;
        private System.Windows.Forms.TextBox txtLocId;
        private System.Windows.Forms.Label NameLabel;
        private System.Windows.Forms.TextBox txtLocName;
        private System.Windows.Forms.Button btnOK;
        private System.Windows.Forms.Button btnCancel;
    }
}