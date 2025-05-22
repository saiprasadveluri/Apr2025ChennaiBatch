namespace FoodDeliveryWinApp
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
            textBox1 = new TextBox();
            Email = new Label();
            password = new Label();
            textBox2 = new TextBox();
            btnLogin = new Button();
            SuspendLayout();
            // 
            // textBox1
            // 
            textBox1.Location = new Point(153, 42);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(178, 23);
            textBox1.TabIndex = 0;
            // 
            // Email
            // 
            Email.AutoSize = true;
            Email.Location = new Point(86, 45);
            Email.Name = "Email";
            Email.Size = new Size(36, 15);
            Email.TabIndex = 1;
            Email.Text = "Email";
            // 
            // password
            // 
            password.AutoSize = true;
            password.Location = new Point(75, 96);
            password.Name = "password";
            password.Size = new Size(57, 15);
            password.TabIndex = 2;
            password.Text = "Password";
            // 
            // textBox2
            // 
            textBox2.Location = new Point(157, 93);
            textBox2.Name = "textBox2";
            textBox2.PasswordChar = '*';
            textBox2.Size = new Size(174, 23);
            textBox2.TabIndex = 3;
            // 
            // btnLogin
            // 
            btnLogin.Location = new Point(174, 162);
            btnLogin.Name = "btnLogin";
            btnLogin.Size = new Size(75, 23);
            btnLogin.TabIndex = 4;
            btnLogin.Text = "Login";
            btnLogin.UseVisualStyleBackColor = true;
            btnLogin.Click += btnLogin_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(btnLogin);
            Controls.Add(textBox2);
            Controls.Add(password);
            Controls.Add(Email);
            Controls.Add(textBox1);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox textBox1;
        private Label Email;
        private Label password;
        private TextBox textBox2;
        private Button btnLogin;
    }
}
