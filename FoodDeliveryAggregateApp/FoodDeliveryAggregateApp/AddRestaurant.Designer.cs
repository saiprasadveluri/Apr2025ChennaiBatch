namespace FoodDeliveryAggregateApp
{
    partial class AddRestaurant
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
            this.RID = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.RestauarantName = new System.Windows.Forms.Label();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // RID
            // 
            this.RID.AutoSize = true;
            this.RID.Location = new System.Drawing.Point(120, 61);
            this.RID.Name = "RID";
            this.RID.Size = new System.Drawing.Size(26, 13);
            this.RID.TabIndex = 0;
            this.RID.Text = "RID";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(243, 58);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(159, 20);
            this.textBox1.TabIndex = 1;
            // 
            // RestauarantName
            // 
            this.RestauarantName.AutoSize = true;
            this.RestauarantName.Location = new System.Drawing.Point(104, 108);
            this.RestauarantName.Name = "RestauarantName";
            this.RestauarantName.Size = new System.Drawing.Size(90, 13);
            this.RestauarantName.TabIndex = 2;
            this.RestauarantName.Text = "Restaurant Name";
            // 
            // textBox2
            // 
            this.textBox2.Location = new System.Drawing.Point(243, 101);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(159, 20);
            this.textBox2.TabIndex = 3;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(120, 149);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(35, 13);
            this.label1.TabIndex = 4;
            this.label1.Text = "label1";
            // 
            // AddRestaurant
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.RestauarantName);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.RID);
            this.Name = "AddRestaurant";
            this.Text = "AddRestaurant";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label RID;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.Label RestauarantName;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.Label label1;
    }
}