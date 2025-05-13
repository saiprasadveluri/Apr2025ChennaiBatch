using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace TaskManagerPMTool
{
    internal class Tasks
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double EstTimeInHrs { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string ProjectTitle { get; set; }
        public Users CreatedBy { get; set; }
        public List<Comments> Comments { get; set; } = new List<Comments>();
        public Users AssignedTO { get; private set; }

        public Tasks(string title, string description, DateTime startDate, DateTime endDate, double estmTime, string priority, string status, string projectTitle, Users createdBy)
        {
            Title = title;
            Description = description;
            StartDate = startDate;
            EndDate = endDate;
            EstTimeInHrs = estmTime;
            Priority = priority;
            Status = status;
            ProjectTitle = projectTitle;
            CreatedBy = createdBy;

        }

        public virtual bool Task_Type()
        {
            return false;
        }

        public virtual string GetTaskInfo()
        {
            return string.Format($"\n \n Task title - {Title} \n Description - {Description} \n Start Date - {StartDate} \n End Date - {EndDate} \n Priority - {Priority} \n Status - {Status}");
        }

        public void AssignTasks(Users assignedTo)
        {
            if(assignedTo.Role == "Developer" || assignedTo.Role == "QA")
            {
                AssignedTO = assignedTo;
                Console.WriteLine($"Task - {Title} assigned to {assignedTo.UserName}");
            }
            else
            {
                Console.WriteLine("Only Developer or QA can be assigned to a Task");
            }
        }

        public void UpdateStatus(string nStatus, Users user)
        {
            if(user.Role == "Developer" || user.Role == "QA")
            {
                Status = nStatus;
                Console.WriteLine($"Task - {Title} status Updated to {nStatus} by {user.UserName}");
            }
            else
            {
                Console.WriteLine("Only Developer or QA can update the task status");
            }
        }
        public void AddComment(Comments comment)
        {
            Comments.Add(comment);
            Console.WriteLine($"Comment added by {comment.Author?.UserName} on task '{Title}'.");
        }
    }
}