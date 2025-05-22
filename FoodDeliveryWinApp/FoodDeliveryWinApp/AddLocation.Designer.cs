namespace FoodDeliveryWinApp
{
    partial class AddLocation
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
            LocationId = new Label();
            LocId = new TextBox();
            LocationName = new Label();
            btnLocation = new Button();
            LocName = new TextBox();
            SuspendLayout();
            // 
            // LocationId
            // 
            LocationId.AutoSize = true;
            LocationId.Location = new Point(84, 43);
            LocationId.Name = "LocationId";
            LocationId.Size = new Size(66, 15);
            LocationId.TabIndex = 0;
            LocationId.Text = "Location Id";
            // 
            // LocId
            // 
            LocId.Location = new Point(221, 40);
            LocId.Name = "LocId";
            LocId.Size = new Size(214, 23);
            LocId.TabIndex = 1;
            // 
            // LocationName
            // 
            LocationName.AutoSize = true;
            LocationName.Location = new Point(83, 94);
            LocationName.Name = "LocationName";
            LocationName.Size = new Size(88, 15);
            LocationName.TabIndex = 2;
            LocationName.Text = "Location Name";
            // 
            // btnLocation
            // 
            btnLocation.Location = new Point(275, 161);
            btnLocation.Name = "btnLocation";
            btnLocation.Size = new Size(139, 23);
            btnLocation.TabIndex = 4;
            btnLocation.Text = "Add Location";
            btnLocation.UseVisualStyleBackColor = true;
            btnLocation.Click += button1_Click;
            // 
            // LocName
            // 
            LocName.Location = new Point(218, 91);
            LocName.Name = "LocName";
            LocName.Size = new Size(217, 23);
            LocName.TabIndex = 5;
            // 
            // AddLocation
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(LocName);
            Controls.Add(btnLocation);
            Controls.Add(LocationName);
            Controls.Add(LocId);
            Controls.Add(LocationId);
            Name = "AddLocation";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label LocationId;
        private TextBox LocId;
        private Label LocationName;
        private Button btnLocation;
        private TextBox LocName;
    }
}