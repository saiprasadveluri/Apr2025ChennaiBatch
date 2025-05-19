namespace WinAppExample1
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
            this.EmailLabel = new System.Windows.Forms.Label();
            this.txtEmail = new System.Windows.Forms.TextBox();
            this.PswdLabel = new System.Windows.Forms.Label();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.btnLogin_Click = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // EmailLabel
            // 
            this.EmailLabel.AutoSize = true;
            this.EmailLabel.Location = new System.Drawing.Point(125, 69);
            this.EmailLabel.Name = "EmailLabel";
            this.EmailLabel.Size = new System.Drawing.Size(41, 16);
            this.EmailLabel.TabIndex = 0;
            this.EmailLabel.Text = "Email";
            // 
            // txtEmail
            // 
            this.txtEmail.Location = new System.Drawing.Point(215, 69);
            this.txtEmail.Name = "txtEmail";
            this.txtEmail.Size = new System.Drawing.Size(167, 22);
            this.txtEmail.TabIndex = 1;
            this.txtEmail.Text = " ";
            // 
            // PswdLabel
            // 
            this.PswdLabel.AutoSize = true;
            this.PswdLabel.Location = new System.Drawing.Point(112, 122);
            this.PswdLabel.Name = "PswdLabel";
            this.PswdLabel.Size = new System.Drawing.Size(67, 16);
            this.PswdLabel.TabIndex = 2;
            this.PswdLabel.Text = "Password";
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(215, 115);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.Size = new System.Drawing.Size(167, 22);
            this.txtPassword.TabIndex = 3;
            // 
            // btnLogin_Click
            // 
            this.btnLogin_Click.Location = new System.Drawing.Point(272, 265);
            this.btnLogin_Click.Name = "btnLogin_Click";
            this.btnLogin_Click.Size = new System.Drawing.Size(75, 23);
            this.btnLogin_Click.TabIndex = 4;
            this.btnLogin_Click.Text = "Login";
            this.btnLogin_Click.UseVisualStyleBackColor = true;
            this.btnLogin_Click.Click += new System.EventHandler(this.btnLogin_Click_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.btnLogin_Click);
            this.Controls.Add(this.txtPassword);
            this.Controls.Add(this.PswdLabel);
            this.Controls.Add(this.txtEmail);
            this.Controls.Add(this.EmailLabel);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label EmailLabel;
        private System.Windows.Forms.TextBox txtEmail;
        private System.Windows.Forms.Label PswdLabel;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Button btnLogin_Click;
    }
}

