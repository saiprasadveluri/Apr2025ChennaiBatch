namespace WinAppExample1
{
    partial class NewServices
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
            this.ServiceNoLabel = new System.Windows.Forms.Label();
            this.serviceLabel = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.FromLoc = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.ToLoc = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.ServiceTypeId = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.TotDis = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // ServiceNoLabel
            // 
            this.ServiceNoLabel.AutoSize = true;
            this.ServiceNoLabel.Location = new System.Drawing.Point(53, 92);
            this.ServiceNoLabel.Name = "ServiceNoLabel";
            this.ServiceNoLabel.Size = new System.Drawing.Size(71, 16);
            this.ServiceNoLabel.TabIndex = 0;
            this.ServiceNoLabel.Text = "ServiceNo";
            // 
            // serviceLabel
            // 
            this.serviceLabel.Location = new System.Drawing.Point(245, 92);
            this.serviceLabel.Name = "serviceLabel";
            this.serviceLabel.Size = new System.Drawing.Size(172, 22);
            this.serviceLabel.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(44, 143);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(89, 16);
            this.label1.TabIndex = 2;
            this.label1.Text = "FromLocation";
            // 
            // FromLoc
            // 
            this.FromLoc.Location = new System.Drawing.Point(245, 137);
            this.FromLoc.Name = "FromLoc";
            this.FromLoc.Size = new System.Drawing.Size(172, 22);
            this.FromLoc.TabIndex = 3;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(53, 205);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(75, 16);
            this.label2.TabIndex = 4;
            this.label2.Text = "ToLocation";
            // 
            // ToLoc
            // 
            this.ToLoc.Location = new System.Drawing.Point(245, 205);
            this.ToLoc.Name = "ToLoc";
            this.ToLoc.Size = new System.Drawing.Size(182, 22);
            this.ToLoc.TabIndex = 5;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(44, 271);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(96, 16);
            this.label3.TabIndex = 6;
            this.label3.Text = "ServiceTypeId";
            // 
            // ServiceTypeId
            // 
            this.ServiceTypeId.Location = new System.Drawing.Point(245, 271);
            this.ServiceTypeId.Name = "ServiceTypeId";
            this.ServiceTypeId.Size = new System.Drawing.Size(182, 22);
            this.ServiceTypeId.TabIndex = 7;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(49, 319);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(91, 16);
            this.label4.TabIndex = 8;
            this.label4.Text = "TotalDisatnce";
            // 
            // TotDis
            // 
            this.TotDis.Location = new System.Drawing.Point(245, 319);
            this.TotDis.Name = "TotDis";
            this.TotDis.Size = new System.Drawing.Size(191, 22);
            this.TotDis.TabIndex = 9;
            // 
            // NewServices
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.TotDis);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.ServiceTypeId);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.ToLoc);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.FromLoc);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.serviceLabel);
            this.Controls.Add(this.ServiceNoLabel);
            this.Name = "NewServices";
            this.Text = "NewServices";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label ServiceNoLabel;
        private System.Windows.Forms.TextBox serviceLabel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox FromLoc;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox ToLoc;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox ServiceTypeId;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox TotDis;
    }
}