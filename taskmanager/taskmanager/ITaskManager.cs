using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskmanager
{
    internal interface ITaskManager
    {
        bool Login(string email, string password);
        void Logout();
        User CreateUser(string userName, string email, string password, UserRole role);
        Project CreateProject(string title, string description, User projectManager);
        IEnumerable<Project> GetProjectsForCurrentUser();
        Task CreateTask(string title, string description, DateTime startDate,
                       DateTime endDate, int estimatedTime, Priority priority,
                       Project project, bool isBug, string specificAttribute1,
                       string specificAttribute2, Severity? severity = null);
        void AssignTask(Task task, User assignee);
        IEnumerable<Task> GetTasksForCurrentUser();
        void UpdateTaskStatus(Task task, TaskStatus newStatus);
        void AddCommentToTask(Task task, string commentText);
        void AssignTaskToQA(Task task, User qaUser);
    }
}
