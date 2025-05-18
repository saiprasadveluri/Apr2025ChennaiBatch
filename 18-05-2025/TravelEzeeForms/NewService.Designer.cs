namespace TravelEzeeForms
{
    partial class NewService
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
            Save = new Button();
            label1 = new Label();
            label2 = new Label();
            label3 = new Label();
            label4 = new Label();
            label5 = new Label();
            ServiceNumber = new TextBox();
            FromLocation = new TextBox();
            ToLocation = new TextBox();
            ServiceTypeId = new TextBox();
            TotalDistance = new TextBox();
            SuspendLayout();
            // 
            // Save
            // 
            Save.Location = new Point(170, 306);
            Save.Name = "Save";
            Save.Size = new Size(94, 29);
            Save.TabIndex = 0;
            Save.Text = "Save";
            Save.UseVisualStyleBackColor = true;
            Save.Click += Save_Click;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(46, 30);
            label1.Name = "label1";
            label1.Size = new Size(110, 20);
            label1.TabIndex = 1;
            label1.Text = "ServiceNumber";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(46, 83);
            label2.Name = "label2";
            label2.Size = new Size(100, 20);
            label2.TabIndex = 2;
            label2.Text = "FromLocation";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(46, 132);
            label3.Name = "label3";
            label3.Size = new Size(82, 20);
            label3.TabIndex = 3;
            label3.Text = "ToLocation";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(46, 175);
            label4.Name = "label4";
            label4.Size = new Size(100, 20);
            label4.TabIndex = 4;
            label4.Text = "ServiceTypeId";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(46, 224);
            label5.Name = "label5";
            label5.Size = new Size(99, 20);
            label5.TabIndex = 5;
            label5.Text = "TotalDistance";
            // 
            // ServiceNumber
            // 
            ServiceNumber.Location = new Point(212, 30);
            ServiceNumber.Name = "ServiceNumber";
            ServiceNumber.Size = new Size(150, 27);
            ServiceNumber.TabIndex = 16;
            // 
            // FromLocation
            // 
            FromLocation.Location = new Point(212, 83);
            FromLocation.Name = "FromLocation";
            FromLocation.Size = new Size(125, 27);
            FromLocation.TabIndex = 17;
            // 
            // ToLocation
            // 
            ToLocation.Location = new Point(212, 132);
            ToLocation.Name = "ToLocation";
            ToLocation.Size = new Size(125, 27);
            ToLocation.TabIndex = 18;
            // 
            // ServiceTypeId
            // 
            ServiceTypeId.Location = new Point(212, 172);
            ServiceTypeId.Name = "ServiceTypeId";
            ServiceTypeId.Size = new Size(125, 27);
            ServiceTypeId.TabIndex = 19;
            // 
            // TotalDistance
            // 
            TotalDistance.Location = new Point(212, 217);
            TotalDistance.Name = "TotalDistance";
            TotalDistance.Size = new Size(125, 27);
            TotalDistance.TabIndex = 20;
            // 
            // NewService
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1081, 461);
            Controls.Add(TotalDistance);
            Controls.Add(ServiceTypeId);
            Controls.Add(ToLocation);
            Controls.Add(FromLocation);
            Controls.Add(ServiceNumber);
            Controls.Add(label5);
            Controls.Add(label4);
            Controls.Add(label3);
            Controls.Add(label2);
            Controls.Add(label1);
            Controls.Add(Save);
            Name = "NewService";
            Text = "NewService";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button Save;
        private Label label1;
        private Label label2;
        private Label label3;
        private Label label4;
        private Label label5;
        private TextBox ServiceNumber;
        private TextBox FromLocation;
        private TextBox ToLocation;
        private TextBox ServiceTypeId;
        private TextBox TotalDistance;
    }
}