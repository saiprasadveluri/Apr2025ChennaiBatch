namespace TravelEzeeWinForms
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
            this.ServiceNolabel = new System.Windows.Forms.Label();
            this.FromLocationlabel = new System.Windows.Forms.Label();
            this.ToLocationlabel = new System.Windows.Forms.Label();
            this.ServiceTypeIdlabel = new System.Windows.Forms.Label();
            this.textServiceNo = new System.Windows.Forms.TextBox();
            this.textServiceTypeId = new System.Windows.Forms.TextBox();
            this.TotalDistancelabel = new System.Windows.Forms.Label();
            this.textTotalDistance = new System.Windows.Forms.TextBox();
            this.SaveButton = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.FromLocationBox = new System.Windows.Forms.ComboBox();
            this.ToLocationBox = new System.Windows.Forms.ComboBox();
            this.textFrom = new System.Windows.Forms.TextBox();
            this.textTo = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // ServiceNolabel
            // 
            this.ServiceNolabel.AutoSize = true;
            this.ServiceNolabel.Location = new System.Drawing.Point(53, 40);
            this.ServiceNolabel.Name = "ServiceNolabel";
            this.ServiceNolabel.Size = new System.Drawing.Size(71, 16);
            this.ServiceNolabel.TabIndex = 0;
            this.ServiceNolabel.Text = "ServiceNo";
            // 
            // FromLocationlabel
            // 
            this.FromLocationlabel.AutoSize = true;
            this.FromLocationlabel.Location = new System.Drawing.Point(53, 90);
            this.FromLocationlabel.Name = "FromLocationlabel";
            this.FromLocationlabel.Size = new System.Drawing.Size(89, 16);
            this.FromLocationlabel.TabIndex = 1;
            this.FromLocationlabel.Text = "FromLocation";
            // 
            // ToLocationlabel
            // 
            this.ToLocationlabel.AutoSize = true;
            this.ToLocationlabel.Location = new System.Drawing.Point(53, 135);
            this.ToLocationlabel.Name = "ToLocationlabel";
            this.ToLocationlabel.Size = new System.Drawing.Size(75, 16);
            this.ToLocationlabel.TabIndex = 2;
            this.ToLocationlabel.Text = "ToLocation";
            // 
            // ServiceTypeIdlabel
            // 
            this.ServiceTypeIdlabel.AutoSize = true;
            this.ServiceTypeIdlabel.Location = new System.Drawing.Point(53, 186);
            this.ServiceTypeIdlabel.Name = "ServiceTypeIdlabel";
            this.ServiceTypeIdlabel.Size = new System.Drawing.Size(96, 16);
            this.ServiceTypeIdlabel.TabIndex = 3;
            this.ServiceTypeIdlabel.Text = "ServiceTypeId";
            // 
            // textServiceNo
            // 
            this.textServiceNo.Location = new System.Drawing.Point(165, 40);
            this.textServiceNo.Name = "textServiceNo";
            this.textServiceNo.Size = new System.Drawing.Size(278, 22);
            this.textServiceNo.TabIndex = 4;
            // 
            // textServiceTypeId
            // 
            this.textServiceTypeId.Location = new System.Drawing.Point(165, 186);
            this.textServiceTypeId.Name = "textServiceTypeId";
            this.textServiceTypeId.Size = new System.Drawing.Size(278, 22);
            this.textServiceTypeId.TabIndex = 7;
            // 
            // TotalDistancelabel
            // 
            this.TotalDistancelabel.AutoSize = true;
            this.TotalDistancelabel.Location = new System.Drawing.Point(53, 234);
            this.TotalDistancelabel.Name = "TotalDistancelabel";
            this.TotalDistancelabel.Size = new System.Drawing.Size(91, 16);
            this.TotalDistancelabel.TabIndex = 8;
            this.TotalDistancelabel.Text = "TotalDistance";
            // 
            // textTotalDistance
            // 
            this.textTotalDistance.Location = new System.Drawing.Point(165, 234);
            this.textTotalDistance.Name = "textTotalDistance";
            this.textTotalDistance.Size = new System.Drawing.Size(278, 22);
            this.textTotalDistance.TabIndex = 9;
            // 
            // SaveButton
            // 
            this.SaveButton.Location = new System.Drawing.Point(56, 298);
            this.SaveButton.Name = "SaveButton";
            this.SaveButton.Size = new System.Drawing.Size(133, 33);
            this.SaveButton.TabIndex = 10;
            this.SaveButton.Text = "Save";
            this.SaveButton.UseVisualStyleBackColor = true;
            this.SaveButton.Click += new System.EventHandler(this.SaveButton_Click);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(314, 298);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(129, 33);
            this.btnCancel.TabIndex = 11;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // FromLocationBox
            // 
            this.FromLocationBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.FromLocationBox.FormattingEnabled = true;
            this.FromLocationBox.Location = new System.Drawing.Point(549, 40);
            this.FromLocationBox.Name = "FromLocationBox";
            this.FromLocationBox.Size = new System.Drawing.Size(278, 24);
            this.FromLocationBox.TabIndex = 12;
            this.FromLocationBox.SelectedIndexChanged += new System.EventHandler(this.FromLocationBox_SelectedIndexChanged);
            // 
            // ToLocationBox
            // 
            this.ToLocationBox.FormattingEnabled = true;
            this.ToLocationBox.Location = new System.Drawing.Point(549, 105);
            this.ToLocationBox.Name = "ToLocationBox";
            this.ToLocationBox.Size = new System.Drawing.Size(278, 24);
            this.ToLocationBox.TabIndex = 13;
            // 
            // textFrom
            // 
            this.textFrom.Location = new System.Drawing.Point(165, 90);
            this.textFrom.Name = "textFrom";
            this.textFrom.Size = new System.Drawing.Size(278, 22);
            this.textFrom.TabIndex = 14;
            // 
            // textTo
            // 
            this.textTo.Location = new System.Drawing.Point(165, 135);
            this.textTo.Name = "textTo";
            this.textTo.Size = new System.Drawing.Size(278, 22);
            this.textTo.TabIndex = 15;
            // 
            // NewServices
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1030, 450);
            this.Controls.Add(this.textTo);
            this.Controls.Add(this.textFrom);
            this.Controls.Add(this.ToLocationBox);
            this.Controls.Add(this.FromLocationBox);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.SaveButton);
            this.Controls.Add(this.textTotalDistance);
            this.Controls.Add(this.TotalDistancelabel);
            this.Controls.Add(this.textServiceTypeId);
            this.Controls.Add(this.textServiceNo);
            this.Controls.Add(this.ServiceTypeIdlabel);
            this.Controls.Add(this.ToLocationlabel);
            this.Controls.Add(this.FromLocationlabel);
            this.Controls.Add(this.ServiceNolabel);
            this.MaximizeBox = false;
            this.Name = "NewServices";
            this.Text = "NewServices";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label ServiceNolabel;
        private System.Windows.Forms.Label FromLocationlabel;
        private System.Windows.Forms.Label ToLocationlabel;
        private System.Windows.Forms.Label ServiceTypeIdlabel;
        private System.Windows.Forms.TextBox textServiceNo;
        private System.Windows.Forms.TextBox textServiceTypeId;
        private System.Windows.Forms.Label TotalDistancelabel;
        private System.Windows.Forms.TextBox textTotalDistance;
        private System.Windows.Forms.Button SaveButton;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.ComboBox FromLocationBox;
        private System.Windows.Forms.ComboBox ToLocationBox;
        private System.Windows.Forms.TextBox textFrom;
        private System.Windows.Forms.TextBox textTo;
    }
}