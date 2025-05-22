namespace FoodDelAggregateApp
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
            this.LoactionIdlabel = new System.Windows.Forms.Label();
            this.LocationNamelabel = new System.Windows.Forms.Label();
            this.textLocationId = new System.Windows.Forms.TextBox();
            this.textLocationName = new System.Windows.Forms.TextBox();
            this.SaveButton = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LoactionIdlabel
            // 
            this.LoactionIdlabel.AutoSize = true;
            this.LoactionIdlabel.Location = new System.Drawing.Point(42, 65);
            this.LoactionIdlabel.Name = "LoactionIdlabel";
            this.LoactionIdlabel.Size = new System.Drawing.Size(57, 13);
            this.LoactionIdlabel.TabIndex = 0;
            this.LoactionIdlabel.Text = "LoactionId";
            // 
            // LocationNamelabel
            // 
            this.LocationNamelabel.AutoSize = true;
            this.LocationNamelabel.Location = new System.Drawing.Point(45, 119);
            this.LocationNamelabel.Name = "LocationNamelabel";
            this.LocationNamelabel.Size = new System.Drawing.Size(76, 13);
            this.LocationNamelabel.TabIndex = 1;
            this.LocationNamelabel.Text = "LocationName";
            // 
            // textLocationId
            // 
            this.textLocationId.Location = new System.Drawing.Point(165, 65);
            this.textLocationId.Name = "textLocationId";
            this.textLocationId.Size = new System.Drawing.Size(100, 20);
            this.textLocationId.TabIndex = 2;
            // 
            // textLocationName
            // 
            this.textLocationName.Location = new System.Drawing.Point(165, 119);
            this.textLocationName.Name = "textLocationName";
            this.textLocationName.Size = new System.Drawing.Size(100, 20);
            this.textLocationName.TabIndex = 3;
            // 
            // SaveButton
            // 
            this.SaveButton.Location = new System.Drawing.Point(48, 196);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(127, 23);
            this.SaveButton.TabIndex = 4;
            this.SaveButton.Text = "SaveLocation";
            this.SaveButton.UseVisualStyleBackColor = true;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // NewLocation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.SaveButton);
            this.Controls.Add(this.textLocationName);
            this.Controls.Add(this.textLocationId);
            this.Controls.Add(this.LocationNamelabel);
            this.Controls.Add(this.LoactionIdlabel);
            this.Name = "NewLocation";
            this.Text = "NewLocation";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LoactionIdlabel;
        private System.Windows.Forms.Label LocationNamelabel;
        private System.Windows.Forms.TextBox textLocationId;
        private System.Windows.Forms.TextBox textLocationName;
        private System.Windows.Forms.Button SaveButton;
    }
}