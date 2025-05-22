namespace FoodDelAggregateApp
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
            this.RestSavebutton = new System.Windows.Forms.Button();
            this.RestIdlabel = new System.Windows.Forms.Label();
            this.RestNamelabel = new System.Windows.Forms.Label();
            this.Locationlabel = new System.Windows.Forms.Label();
            this.MinOrderVallabel = new System.Windows.Forms.Label();
            this.textRestId = new System.Windows.Forms.TextBox();
            this.textRestName = new System.Windows.Forms.TextBox();
            this.textLocation = new System.Windows.Forms.TextBox();
            this.textMinOrderVal = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // RestSavebutton
            // 
            this.RestSavebutton.Location = new System.Drawing.Point(38, 193);
            this.RestSavebutton.Name = "RestSavebutton";
            this.RestSavebutton.Size = new System.Drawing.Size(75, 23);
            this.RestSavebutton.TabIndex = 0;
            this.RestSavebutton.Text = "RestSave";
            this.RestSavebutton.UseVisualStyleBackColor = true;
            this.RestSavebutton.Click += new System.EventHandler(this.RestSavebutton_Click);
            // 
            // RestIdlabel
            // 
            this.RestIdlabel.AutoSize = true;
            this.RestIdlabel.Location = new System.Drawing.Point(35, 39);
            this.RestIdlabel.Name = "RestIdlabel";
            this.RestIdlabel.Size = new System.Drawing.Size(38, 13);
            this.RestIdlabel.TabIndex = 1;
            this.RestIdlabel.Text = "RestId";
            // 
            // RestNamelabel
            // 
            this.RestNamelabel.AutoSize = true;
            this.RestNamelabel.Location = new System.Drawing.Point(35, 70);
            this.RestNamelabel.Name = "RestNamelabel";
            this.RestNamelabel.Size = new System.Drawing.Size(57, 13);
            this.RestNamelabel.TabIndex = 2;
            this.RestNamelabel.Text = "RestName";
            // 
            // Locationlabel
            // 
            this.Locationlabel.AutoSize = true;
            this.Locationlabel.Location = new System.Drawing.Point(35, 106);
            this.Locationlabel.Name = "Locationlabel";
            this.Locationlabel.Size = new System.Drawing.Size(48, 13);
            this.Locationlabel.TabIndex = 3;
            this.Locationlabel.Text = "Location";
            // 
            // MinOrderVallabel
            // 
            this.MinOrderVallabel.AutoSize = true;
            this.MinOrderVallabel.Location = new System.Drawing.Point(35, 141);
            this.MinOrderVallabel.Name = "MinOrderVallabel";
            this.MinOrderVallabel.Size = new System.Drawing.Size(65, 13);
            this.MinOrderVallabel.TabIndex = 4;
            this.MinOrderVallabel.Text = "MinOrderVal";
            // 
            // textRestId
            // 
            this.textRestId.Location = new System.Drawing.Point(157, 39);
            this.textRestId.Name = "textRestId";
            this.textRestId.Size = new System.Drawing.Size(159, 20);
            this.textRestId.TabIndex = 5;
            // 
            // textRestName
            // 
            this.textRestName.Location = new System.Drawing.Point(157, 70);
            this.textRestName.Name = "textRestName";
            this.textRestName.Size = new System.Drawing.Size(159, 20);
            this.textRestName.TabIndex = 6;
            // 
            // textLocation
            // 
            this.textLocation.Location = new System.Drawing.Point(157, 106);
            this.textLocation.Name = "textLocation";
            this.textLocation.Size = new System.Drawing.Size(159, 20);
            this.textLocation.TabIndex = 7;
            // 
            // textMinOrderVal
            // 
            this.textMinOrderVal.Location = new System.Drawing.Point(157, 138);
            this.textMinOrderVal.Name = "textMinOrderVal";
            this.textMinOrderVal.Size = new System.Drawing.Size(159, 20);
            this.textMinOrderVal.TabIndex = 8;
            // 
            // NewRestaurant
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.textMinOrderVal);
            this.Controls.Add(this.textLocation);
            this.Controls.Add(this.textRestName);
            this.Controls.Add(this.textRestId);
            this.Controls.Add(this.MinOrderVallabel);
            this.Controls.Add(this.Locationlabel);
            this.Controls.Add(this.RestNamelabel);
            this.Controls.Add(this.RestIdlabel);
            this.Controls.Add(this.RestSavebutton);
            this.Name = "NewRestaurant";
            this.Text = "NewRestaurant";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button RestSavebutton;
        private System.Windows.Forms.Label RestIdlabel;
        private System.Windows.Forms.Label RestNamelabel;
        private System.Windows.Forms.Label Locationlabel;
        private System.Windows.Forms.Label MinOrderVallabel;
        private System.Windows.Forms.TextBox textRestId;
        private System.Windows.Forms.TextBox textRestName;
        private System.Windows.Forms.TextBox textLocation;
        private System.Windows.Forms.TextBox textMinOrderVal;
    }
}