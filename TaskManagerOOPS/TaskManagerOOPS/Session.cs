using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class Session
    {
        private static Session instance;
        
        List<UserInfo> users = new List<UserInfo>();
        List<Roles> roles = new List<Roles>();
        List<Project> projects = new List<Project>();
        List<Task> tasks = new List<Task>();    
        List<Comment> comments = new List<Comment>();
        //Sequence Numbers
        private int COMMENT_SEQ_NUMBER = 0;
        public int Increment_COMMENT_SEQ_NUMBER()
        {
            return ++COMMENT_SEQ_NUMBER;
        }
        private int TASK_SEQ_NUMBER = 0;
        public int Increment_TASK_SEQ_NUMBER()
        {
            return ++TASK_SEQ_NUMBER;
        }
        private int PROJECT_SEQ_NUMBER = 0;
        public int Increment_PROJECT_SEQ_NUMBER()
        {
            return ++PROJECT_SEQ_NUMBER;
        }
        private int ROLE_SEQ_NUMBER = 0;
        public int Increment_ROLE_SEQ_NUMBER()
        {
            return ++ROLE_SEQ_NUMBER;
        } 
        private int USER_SEQ_NUMBER = 0;
        public int Increment_USER_SEQ_NUMBER()
        {
            return ++USER_SEQ_NUMBER;
        }
        private Session() { }
        
        public static Session GetInstance()
        {
            if (instance == null)
            {
                instance = new Session();
            }
            return instance;
        }

        public List<UserInfo> Users
        {
            get { return users; }
        }
        public List<Roles> Roles
        {
            get { return roles; }
        }
        public List<Project> Projects
        {
            get { return projects; }
        }
        public List<Task> Tasks
        {
            get { return tasks; }
        }

        public List<Comment> Comments
        {
            get { return comments; }
        }

    }
}
