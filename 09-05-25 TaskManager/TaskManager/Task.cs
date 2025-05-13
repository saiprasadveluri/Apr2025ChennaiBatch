
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace TaskManager
{

  internal class Task : Project
  {
    public string TTitle
    {
      get; set;
    }
    public string TDescription { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public int EstimatedTime { get; set; }
    public string Priority { get; set; }
    public string Status { get; set; }
    public User AssignedUser { get; private set; }
    public Comment[] Comments { get; set; } = new Comment[10];
    private int commentCount = 0;

    public Task(string ttitle, string tdescription, DateTime startdate, DateTime enddate,
        int estimated, string priority, string status, string title, string description, User manager) : base(title, description, manager)
    {
      TTitle = ttitle;
      TDescription = tdescription;
      StartDate = startdate;
      EndDate = enddate;
      EstimatedTime = estimated;
      Priority = priority;
      Status = status;
    }
    public void AssignTask(User user)
    {
      if (user.Role == "Developer" || user.Role == "QA")
      {
        AssignedUser = user;
        Console.WriteLine($"Task '{Title}' assigned to {user.UserName}");
      }
      else
      {
        Console.WriteLine($"Error: {user.UserName} is not a Developer or QA.");
      }
    }

    public void UpdateStatus(string newStatus, User user)
    {
      if (user.Role == "Developer" || user.Role == "QA")
      {
        Status = newStatus;
        Console.WriteLine($"Task '{Title}' status updated to {newStatus} by {user.UserName}");
      }
      else
      {
        Console.WriteLine("Error: Only Developer or QA can update task status.");
      }
    }

    public void AddComment(User user, string commentText)
    {
      if (user.Role == "Developer" || user.Role == "QA")
      {
        if (commentCount >= Comments.Length)
        {
          Console.WriteLine("Error: Comment list is full.");
          return;
        }

        Comments[commentCount++] = new Comment(user, commentText);
        Console.WriteLine($"Comment added by {user.UserName}: {commentText}");
      }
      else
      {
        Console.WriteLine("Cannot add comments");
      }
    }

    public override string ShowDetails()
    {
      return string.Format($"{TTitle}---{TDescription}--{StartDate}---{EndDate}--{EstimatedTime}----{Priority}--{Status}");
    }

  }
}

