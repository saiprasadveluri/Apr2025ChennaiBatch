using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace TaskManager
{
    internal class WorkItem : Project
    {
        public string TaskTitle { get; set; }
        public string TaskDescription { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime DueDate { get; set; }
        public int ExpectedDuration { get; set; }
        public string Urgency { get; set; }
        public string CurrentStatus { get; set; }
        public Member AssignedMember { get; private set; }
        public Comment[] FeedbackList { get; set; } = new Comment[20];
        private int feedbackCount = 0;

        public WorkItem(string taskTitle, string taskDescription, DateTime creationDate, DateTime dueDate,
            int expectedDuration, string urgency, string currentStatus, string title, string description, Member leader)
            : base(title, description, leader)
        {
            TaskTitle = taskTitle;
            TaskDescription = taskDescription;
            CreationDate = creationDate;
            DueDate = dueDate;
            ExpectedDuration = expectedDuration;
            Urgency = urgency;
            CurrentStatus = currentStatus;
        }

        public void AllocateTask(Member member)
        {
            if (member.UserRole == "Developer" || member.UserRole == "QA")
            {
                AssignedMember = member;
                Console.WriteLine($"Work Item '{TaskTitle}' allocated to {member.Username}");
            }
            else
            {
                Console.WriteLine($"Error: {member.Username} does not have the appropriate role.");
            }
        }

        public void ModifyStatus(string newStatus, Member member)
        {
            if (member.UserRole == "Developer" || member.UserRole == "QA")
            {
                CurrentStatus = newStatus;
                Console.WriteLine($"Work Item '{TaskTitle}' status changed to {newStatus} by {member.Username}");
            }
            else
            {
                Console.WriteLine("Error: Only Developer or QA can modify status.");
            }
        }

        public void AppendFeedback(Member member, string feedbackText)
        {
            if (member.UserRole == "Developer" || member.UserRole == "QA")
            {
                if (feedbackCount >= FeedbackList.Length)
                {
                    Console.WriteLine("Error: Maximum feedback entries reached.");
                    return;
                }

                FeedbackList[feedbackCount++] = new Comment(member, feedbackText);
                Console.WriteLine($"Feedback added by {member.Username}: {feedbackText}");
            }
            else
            {
                Console.WriteLine("Error: Only designated team members can submit feedback.");
            }
        }

        public override string DisplayDetails()
        {
            return string.Format($"{TaskTitle}, {TaskDescription}, {CreationDate}, {DueDate}, {ExpectedDuration} days, {Urgency} priority, Status: {CurrentStatus}");
        }
    }
}
