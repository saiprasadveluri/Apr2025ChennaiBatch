namespace TravelEzeeWinForms
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
            this.LocationIdlabel = new System.Windows.Forms.Label();
            this.NameLabel = new System.Windows.Forms.Label();
            this.textLocNo = new System.Windows.Forms.TextBox();
            this.textLocName = new System.Windows.Forms.TextBox();
            this.SaveButton = new System.Windows.Forms.Button();
            this.CancelButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LocationIdlabel
            // 
            this.LocationIdlabel.AutoSize = true;
            this.LocationIdlabel.Location = new System.Drawing.Point(54, 48);
            this.LocationIdlabel.Name = "LocationIdlabel";
            this.LocationIdlabel.Size = new System.Drawing.Size(69, 16);
            this.LocationIdlabel.TabIndex = 0;
            this.LocationIdlabel.Text = "LocationId";
            // 
            // NameLabel
            // 
            this.NameLabel.AutoSize = true;
            this.NameLabel.Location = new System.Drawing.Point(54, 110);
            this.NameLabel.Name = "NameLabel";
            this.NameLabel.Size = new System.Drawing.Size(44, 16);
            this.NameLabel.TabIndex = 1;
            this.NameLabel.Text = "Name";
            // 
            // textLocNo
            // 
            this.textLocNo.Location = new System.Drawing.Point(224, 48);
            this.textLocNo.Name = "textLocNo";
            this.textLocNo.Size = new System.Drawing.Size(184, 22);
            this.textLocNo.TabIndex = 2;
            // 
            // textLocName
            // 
            this.textLocName.Location = new System.Drawing.Point(224, 107);
            this.textLocName.Name = "textLocName";
            this.textLocName.Size = new System.Drawing.Size(184, 22);
            this.textLocName.TabIndex = 3;
            // 
            // SaveButton
            // 
            this.SaveButton.Location = new System.Drawing.Point(57, 175);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(117, 23);
            this.SaveButton.TabIndex = 4;
            this.SaveButton.Text = "Save";
            this.SaveButton.UseVisualStyleBackColor = true;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // CancelButton
            // 
            this.CancelButton.Location = new System.Drawing.Point(305, 175);
            this.CancelButton.Name = "CancelButton";
            this.CancelButton.Size = new System.Drawing.Size(103, 23);
            this.CancelButton.TabIndex = 5;
            this.CancelButton.Text = "Cancel";
            this.CancelButton.UseVisualStyleBackColor = true;
            // 
            // NewLocation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.CancelButton);
            this.Controls.Add(this.SaveButton);
            this.Controls.Add(this.textLocName);
            this.Controls.Add(this.textLocNo);
            this.Controls.Add(this.NameLabel);
            this.Controls.Add(this.LocationIdlabel);
            this.Name = "NewLocation";
            this.Text = "NewLocation";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LocationIdlabel;
        private System.Windows.Forms.Label NameLabel;
        private System.Windows.Forms.TextBox textLocNo;
        private System.Windows.Forms.TextBox textLocName;
        private System.Windows.Forms.Button SaveButton;
        private System.Windows.Forms.Button CancelButton;
    }
}