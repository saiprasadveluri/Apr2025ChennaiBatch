using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class Comments:Tasks
    {
        public string Content { get; set; }
        public DateTime TimeStamp { get; set; }
        public Users Author { get; set; }

        public Comments(string content,DateTime timeStamp, Users author, string title, string description, DateTime startDate, DateTime endDate, double estmTime, string priority, string status, string projectTitle, Users createdBy) : base(title, description, startDate, endDate, estmTime, priority, status, projectTitle, createdBy)
        {
            Content = content;
            TimeStamp = timeStamp;
            Author = author;
        }
        public override string GetTaskInfo()
        {
            return base.GetTaskInfo() + $"\nType: Comment\nAuthor: {Author?.UserName}\nTime: {TimeStamp}\nContent: {Content}";
        }
    }
}
