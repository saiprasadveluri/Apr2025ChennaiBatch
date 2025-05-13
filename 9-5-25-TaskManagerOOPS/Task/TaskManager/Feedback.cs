using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Feedback
    {
        public Member SubmittedBy { get; set; }
        public string FeedbackText { get; set; }
        public DateTime SubmissionDate { get; set; }

        public Feedback(Member member, string feedbackContent)
        {
            SubmittedBy = member;
            FeedbackText = feedbackContent;
            SubmissionDate = DateTime.Now;
        }

        public void ShowFeedback()
        {
            Console.WriteLine($" - {SubmittedBy.Username}: {FeedbackText}");
        }
    }
}
