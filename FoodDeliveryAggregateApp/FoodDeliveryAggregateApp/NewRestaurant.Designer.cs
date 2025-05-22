namespace FoodDeliveryAggregateApp
{
    partial class NewRestaurant
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
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.rid = new System.Windows.Forms.TextBox();
            this.rname = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.rloc = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.morder = new System.Windows.Forms.TextBox();
            this.btnSave = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(69, 27);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(71, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Restaurant Id";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(69, 60);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(90, 13);
            this.label2.TabIndex = 1;
            this.label2.Text = "Restaurant Name";
            // 
            // rid
            // 
            this.rid.Location = new System.Drawing.Point(231, 20);
            this.rid.Name = "rid";
            this.rid.Size = new System.Drawing.Size(133, 20);
            this.rid.TabIndex = 2;
            // 
            // rname
            // 
            this.rname.Location = new System.Drawing.Point(231, 57);
            this.rname.Name = "rname";
            this.rname.Size = new System.Drawing.Size(133, 20);
            this.rname.TabIndex = 3;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(69, 94);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(103, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Restaurant Location";
            // 
            // rloc
            // 
            this.rloc.Location = new System.Drawing.Point(231, 94);
            this.rloc.Name = "rloc";
            this.rloc.Size = new System.Drawing.Size(133, 20);
            this.rloc.TabIndex = 5;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(69, 127);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(77, 13);
            this.label4.TabIndex = 6;
            this.label4.Text = "MinOrderValue";
            // 
            // morder
            // 
            this.morder.Location = new System.Drawing.Point(231, 127);
            this.morder.Name = "morder";
            this.morder.Size = new System.Drawing.Size(133, 20);
            this.morder.TabIndex = 7;
            // 
            // btnSave
            // 
            this.btnSave.Location = new System.Drawing.Point(188, 182);
            this.btnSave.Name = "btnSave";
            this.btnSave.Size = new System.Drawing.Size(75, 23);
            this.btnSave.TabIndex = 8;
            this.btnSave.Text = "Save";
            this.btnSave.UseVisualStyleBackColor = true;
            this.btnSave.Click += new System.EventHandler(this.btnSave_Click);
            // 
            // NewRestaurant
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnSave);
            this.Controls.Add(this.morder);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.rloc);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.rname);
            this.Controls.Add(this.rid);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "NewRestaurant";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox rid;
        private System.Windows.Forms.TextBox rname;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox rloc;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox morder;
        private System.Windows.Forms.Button btnSave;
    }
}