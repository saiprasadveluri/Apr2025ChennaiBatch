namespace FoodDeliveryAggregateApp
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
            this.lblLocName = new System.Windows.Forms.Label();
            this.lblLocNum = new System.Windows.Forms.Label();
            this.txtLocName = new System.Windows.Forms.TextBox();
            this.txtLocNum = new System.Windows.Forms.TextBox();
            this.btnSave = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lblLocName
            // 
            this.lblLocName.AutoSize = true;
            this.lblLocName.Location = new System.Drawing.Point(48, 26);
            this.lblLocName.Name = "lblLocName";
            this.lblLocName.Size = new System.Drawing.Size(53, 13);
            this.lblLocName.TabIndex = 0;
            this.lblLocName.Text = "LocName";
            // 
            // lblLocNum
            // 
            this.lblLocNum.AutoSize = true;
            this.lblLocNum.Location = new System.Drawing.Point(51, 92);
            this.lblLocNum.Name = "lblLocNum";
            this.lblLocNum.Size = new System.Drawing.Size(47, 13);
            this.lblLocNum.TabIndex = 1;
            this.lblLocNum.Text = "LocNum";
            // 
            // txtLocName
            // 
            this.txtLocName.Location = new System.Drawing.Point(162, 26);
            this.txtLocName.Name = "txtLocName";
            this.txtLocName.Size = new System.Drawing.Size(100, 20);
            this.txtLocName.TabIndex = 2;
            // 
            // txtLocNum
            // 
            this.txtLocNum.Location = new System.Drawing.Point(162, 84);
            this.txtLocNum.Name = "txtLocNum";
            this.txtLocNum.Size = new System.Drawing.Size(100, 20);
            this.txtLocNum.TabIndex = 3;
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(22, 165);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(75, 23);
            this.btnSave.TabIndex = 4;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            this.btnSave.Click += new System.EventHandler(this.btnSave_Click);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(187, 164);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(75, 23);
            this.btnCancel.TabIndex = 5;
            this.btnCancel.Text = "Cancel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // NewLocation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.txtLocNum);
            this.Controls.Add(this.txtLocName);
            this.Controls.Add(this.lblLocNum);
            this.Controls.Add(this.lblLocName);
            this.Name = "NewLocation";
            this.Text = "NewLocation";
            this.Load += new System.EventHandler(this.NewLocation_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblLocName;
        private System.Windows.Forms.Label lblLocNum;
        private System.Windows.Forms.TextBox txtLocName;
        private System.Windows.Forms.TextBox txtLocNum;
        private System.Windows.Forms.Button btnSave;
        private System.Windows.Forms.Button btnCancel;
    }
}