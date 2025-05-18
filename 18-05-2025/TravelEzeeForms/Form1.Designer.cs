namespace TravelEzeeForms
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            Email = new Label();
            Password = new Label();
            EmailId = new TextBox();
            Password1 = new TextBox();
            LogIn = new Button();
            SuspendLayout();
            // 
            // Email
            // 
            Email.AutoSize = true;
            Email.Location = new Point(41, 50);
            Email.Name = "Email";
            Email.Size = new Size(46, 20);
            Email.TabIndex = 0;
            Email.Text = "Email";
            // 
            // Password
            // 
            Password.AutoSize = true;
            Password.Location = new Point(376, 50);
            Password.Name = "Password";
            Password.Size = new Size(70, 20);
            Password.TabIndex = 1;
            Password.Text = "Password";
            // 
            // EmailId
            // 
            EmailId.Location = new Point(139, 50);
            EmailId.Name = "EmailId";
            EmailId.Size = new Size(125, 27);
            EmailId.TabIndex = 2;
            // 
            // Password1
            // 
            Password1.Location = new Point(465, 47);
            Password1.Name = "Password1";
            Password1.Size = new Size(125, 27);
            Password1.TabIndex = 3;
            // 
            // LogIn
            // 
            LogIn.Location = new Point(684, 47);
            LogIn.Name = "LogIn";
            LogIn.Size = new Size(94, 29);
            LogIn.TabIndex = 4;
            LogIn.Text = "Login";
            LogIn.UseVisualStyleBackColor = true;
            LogIn.Click += LogIn_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1215, 450);
            Controls.Add(LogIn);
            Controls.Add(Password1);
            Controls.Add(EmailId);
            Controls.Add(Password);
            Controls.Add(Email);
            Name = "Form1";
            Text = "Form1";
            WindowState = FormWindowState.Maximized;
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label Email;
        private Label Password;
        private TextBox EmailId;
        private TextBox Password1;
        private Button LogIn;
    }
}
