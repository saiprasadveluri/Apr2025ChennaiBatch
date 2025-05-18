namespace TravelEzeeForms
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
            LocationNo = new Label();
            LocationName1 = new Label();
            LocationNumber = new TextBox();
            LocationName = new TextBox();
            Save = new Button();
            SuspendLayout();
            // 
            // LocationNo
            // 
            LocationNo.AutoSize = true;
            LocationNo.Location = new Point(46, 53);
            LocationNo.Name = "LocationNo";
            LocationNo.Size = new Size(86, 20);
            LocationNo.TabIndex = 0;
            LocationNo.Text = "LocationNo";
            // 
            // LocationName1
            // 
            LocationName1.AutoSize = true;
            LocationName1.Location = new Point(46, 120);
            LocationName1.Name = "LocationName1";
            LocationName1.Size = new Size(106, 20);
            LocationName1.TabIndex = 1;
            LocationName1.Text = "LocationName";
            // 
            // LocationNumber
            // 
            LocationNumber.Location = new Point(163, 53);
            LocationNumber.Name = "LocationNumber";
            LocationNumber.Size = new Size(192, 27);
            LocationNumber.TabIndex = 2;
            // 
            // LocationName
            // 
            LocationName.Location = new Point(163, 117);
            LocationName.Name = "LocationName";
            LocationName.Size = new Size(178, 27);
            LocationName.TabIndex = 3;
            // 
            // Save
            // 
            Save.Location = new Point(206, 215);
            Save.Name = "Save";
            Save.Size = new Size(94, 29);
            Save.TabIndex = 4;
            Save.Text = "Save";
            Save.UseVisualStyleBackColor = true;
            Save.Click += Save_Click;
            // 
            // NewLocation
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(Save);
            Controls.Add(LocationName);
            Controls.Add(LocationNumber);
            Controls.Add(LocationName1);
            Controls.Add(LocationNo);
            Name = "NewLocation";
            Text = "NewLocation";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label LocationNo;
        private Label LocationName1;
        private TextBox LocationNumber;
        private TextBox LocationName;
        private Button Save;
    }
}