using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TPLWinApp
{
    public partial class Form1 : Form
    {
        CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        public Form1()
        {
            InitializeComponent();
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            /*Task<string> downloadTask = new Task<string>(() =>
            {
                lstActions.Items.Add("From downlaod Task,,, downloading");
                Task.Delay(5000).Wait();
                lstActions.Items.Add("From downlaod Task,,, complete");
                return "FileName.txt";
            });            
            var ContTask=downloadTask.ContinueWith<string>(t =>
            {
                string Downloadfile = t.Result;
                lstActions.Items.Add("File Save started..." + Downloadfile);
                Task.Delay(5000).Wait();
                return "Success";
            });
            downloadTask.Start();
            string FinalResult= ContTask.Result;
            lstActions.Items.Add("Final Process Result: "+FinalResult);*/
            /*Task<int> t = new Task<int>(() =>
            {    
                for(int n=1;n<5;++n)
                {
                    Task childTask = new Task(() =>
                    {
                        lstActions.Items.Add("From Child Task");
                    },TaskCreationOptions.AttachedToParent);
                    childTask.Start();
                }
                lstActions.Items.Add("Parent Completed");
                return 10;
            });
            t.ContinueWith(ptask => {
                lstActions.Items.Add("From Task COntinuation");
            },TaskContinuationOptions.OnlyOnRanToCompletion);

            try
            {
                t.Start();
                while(t.Status!= TaskStatus.RanToCompletion)
                {
                    lstActions.Items.Add("Parent is running...");
                    Task.Delay(200).Wait();
                }
                var val=t.Result;
            }
            catch (Exception ex)
            {
                lstActions.Items.Add(ex.GetType()+ " : "+ ex.Message);
                if(ex.InnerException!=null)
                {
                    lstActions.Items.Add(ex.InnerException.Message);
                }
            }*/

            /*Task longRunning = new Task(() =>
            {
                for (int i = 0; i < 100000; ++i)
                {
                    Task.Delay(100).Wait();
                    if(cancellationTokenSource.IsCancellationRequested)
                    {
                        cancellationTokenSource.Token.ThrowIfCancellationRequested();
                        break;
                    }
                    lstActions.Items.Add("Counting: "+i);
                }
            }, cancellationTokenSource.Token);
            Task onCacelAction = longRunning.ContinueWith(t =>
            {
                lstActions.Items.Add("Cancellation requested");
            }, TaskContinuationOptions.OnlyOnCanceled);
            longRunning.Start();*/
            /*Task task = new Task(MyTaskFunc);
            task.Start();
            task.Wait();
            lstActions.Items.Add("Action comleted");*/
            await MyTaskFunc();
            lstActions.Items.Add("Action comleted");
        }

        private async Task MyTaskFunc()
        {
            for (int i = 0; i < 10; i++)
            {
                lstActions.Items.Add("Counting: " + i);                
                await MyTaskFunc_2();
            }
        }
        private async Task MyTaskFunc_2()
        {
            for (int i = 0; i < 10; i++)
            {
                lstActions.Items.Add("Counting_2: " + i);
                await Task.Delay(100);
            }
        }
        private void button2_Click(object sender, EventArgs e)
        {
            cancellationTokenSource.Cancel();
        }
    }
}
