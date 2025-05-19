namespace ChartingWinForms
{
    partial class InputForm
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
            this.valueX = new System.Windows.Forms.NumericUpDown();
            this.valueY = new System.Windows.Forms.NumericUpDown();
            this.btnAddValue = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.valueX)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.valueY)).BeginInit();
            this.SuspendLayout();
            // 
            // valueX
            // 
            this.valueX.Location = new System.Drawing.Point(137, 22);
            this.valueX.Name = "valueX";
            this.valueX.Size = new System.Drawing.Size(233, 20);
            this.valueX.TabIndex = 0;
            // 
            // valueY
            // 
            this.valueY.Location = new System.Drawing.Point(137, 60);
            this.valueY.Name = "valueY";
            this.valueY.Size = new System.Drawing.Size(233, 20);
            this.valueY.TabIndex = 1;
            // 
            // btnAddValue
            // 
            this.btnAddValue.Location = new System.Drawing.Point(194, 99);
            this.btnAddValue.Name = "btnAddValue";
            this.btnAddValue.Size = new System.Drawing.Size(75, 23);
            this.btnAddValue.TabIndex = 2;
            this.btnAddValue.Text = "Add Value";
            this.btnAddValue.UseVisualStyleBackColor = true;
            this.btnAddValue.Click += new System.EventHandler(this.btnAddValue_Click);
            // 
            // InputForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(480, 161);
            this.Controls.Add(this.btnAddValue);
            this.Controls.Add(this.valueY);
            this.Controls.Add(this.valueX);
            this.Name = "InputForm";
            this.Text = "InputForm";
            this.Load += new System.EventHandler(this.InputForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.valueX)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.valueY)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.NumericUpDown valueX;
        private System.Windows.Forms.NumericUpDown valueY;
        private System.Windows.Forms.Button btnAddValue;
    }
}