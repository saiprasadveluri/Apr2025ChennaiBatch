namespace TravelEzeeWinForms
{
    partial class Form1
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
            this.Emaillabel = new System.Windows.Forms.Label();
            this.textEmail = new System.Windows.Forms.TextBox();
            this.textPassword = new System.Windows.Forms.TextBox();
            this.LoginButton = new System.Windows.Forms.Button();
            this.Passwordlabel = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // Emaillabel
            // 
            this.Emaillabel.AutoSize = true;
            this.Emaillabel.Location = new System.Drawing.Point(55, 45);
            this.Emaillabel.Name = "Emaillabel";
            this.Emaillabel.Size = new System.Drawing.Size(41, 16);
            this.Emaillabel.TabIndex = 0;
            this.Emaillabel.Text = "Email";
            // 
            // textEmail
            // 
            this.textEmail.Location = new System.Drawing.Point(177, 45);
            this.textEmail.Name = "textEmail";
            this.textEmail.Size = new System.Drawing.Size(251, 22);
            this.textEmail.TabIndex = 2;
            // 
            // textPassword
            // 
            this.textPassword.Location = new System.Drawing.Point(177, 91);
            this.textPassword.Name = "textPassword";
            this.textPassword.Size = new System.Drawing.Size(251, 22);
            this.textPassword.TabIndex = 3;
            // 
            // LoginButton
            // 
            this.LoginButton.Location = new System.Drawing.Point(58, 153);
            this.LoginButton.Name = "LoginButton";
            this.LoginButton.Size = new System.Drawing.Size(126, 33);
            this.LoginButton.TabIndex = 4;
            this.LoginButton.Text = "Login";
            this.LoginButton.UseVisualStyleBackColor = true;
            this.LoginButton.Click += new System.EventHandler(this.LoginButton_Click);
            // 
            // Passwordlabel
            // 
            this.Passwordlabel.AutoSize = true;
            this.Passwordlabel.Location = new System.Drawing.Point(58, 96);
            this.Passwordlabel.Name = "Passwordlabel";
            this.Passwordlabel.Size = new System.Drawing.Size(67, 16);
            this.Passwordlabel.TabIndex = 5;
            this.Passwordlabel.Text = "Password";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlLight;
            this.ClientSize = new System.Drawing.Size(1045, 450);
            this.Controls.Add(this.Passwordlabel);
            this.Controls.Add(this.LoginButton);
            this.Controls.Add(this.textPassword);
            this.Controls.Add(this.textEmail);
            this.Controls.Add(this.Emaillabel);
            this.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.MinimizeBox = false;
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Emaillabel;
        private System.Windows.Forms.TextBox textEmail;
        private System.Windows.Forms.TextBox textPassword;
        private System.Windows.Forms.Button LoginButton;
        private System.Windows.Forms.Label Passwordlabel;
    }
}

