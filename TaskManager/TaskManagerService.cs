using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskManager.Models;
using Task = TaskManager.Models.Task;
using TaskStatus = TaskManager.Models.TaskStatus;
namespace TaskManager.Services
{
    public class TaskManagerService : ITaskManagerService
    {
        private List<User> _users;
        private List<Project> _projects;
        private User _currentUser;
        public TaskManagerService()
        {
            _users = new List<User>();
            _projects = new List<Project>();
            // Add default admin user
            var admin = new User("admin", "admin@taskmanager.com", "admin123", UserRole.SiteAdmin);
            _users.Add(admin);
            _currentUser = admin;
        }
        public bool Login(string email, string password)
        {
            var user = _users.FirstOrDefault(u => u.Email == email && u.Password == password);
            if (user != null)
            {
                _currentUser = user;
                return true;
            }
            return false;
        }
        public void Logout()
        {
            _currentUser = null;
        }
        public User CreateUser(string userName, string email, string password, UserRole role)
        {
 
            if (_currentUser.Role != UserRole.ProjectManager && _currentUser.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only Project Managers or Site Admins can create tasks.");
            }
            if (_users.Any(u => u.Email == email))
            {
                throw new ArgumentException("User with this email already exists.");
            }
            var newUser = new User(userName, email, password, role);
            _users.Add(newUser);
            return newUser;
        }
        public Project CreateProject(string title, string description, User projectManager)
        {
            if (_currentUser?.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only SiteAdmin can create projects.");
            }
            if (projectManager.Role != UserRole.ProjectManager)
            {
                throw new ArgumentException("Project manager must have ProjectManager role.");
            }
            var project = new Project(title, description, projectManager);
            _projects.Add(project);
            return project;
        }
        public IEnumerable<Project> GetProjectsForCurrentUser()
        {
            if (_currentUser == null)
            {
                throw new UnauthorizedAccessException("User not logged in.");
            }
            if (_currentUser.Role == UserRole.ProjectManager)
            {
                return _projects.Where(p => p.ProjectManager.Email == _currentUser.Email);
            }
            if (_currentUser.Role == UserRole.Developer || _currentUser.Role == UserRole.QA)
            {
                return _projects.Where(p => p.TeamMembers.Any(m => m.Email == _currentUser.Email));
            }
            if (_currentUser.Role == UserRole.SiteAdmin)
            {
                return _projects;
            }
            
            return Enumerable.Empty<Project>();
        }
        public Task CreateTask(string title, string description, DateTime startDate,
                              DateTime endDate, int estimatedTime, Priority priority,
                              Project project, bool isBug, string specificAttribute1,
                              string specificAttribute2, Severity? severity = null)
        {
            if (_currentUser?.Role != UserRole.ProjectManager && _currentUser?.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only Project Managers or Site Admins can create tasks.");
            }
            if (project.ProjectManager.Email != _currentUser.Email && _currentUser.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only Project Managers or Site Admins can create tasks.");
            }
            Task newTask;
            if (isBug)
            {
                if (!int.TryParse(specificAttribute2, out int lineNumber))
                {
                    throw new ArgumentException("Line number must be an integer for bugs.");
                }
                if (!severity.HasValue)
                {
                    throw new ArgumentException("Severity must be specified for bugs.");
                }
                newTask = new Bug(title, description, startDate, endDate, estimatedTime,
                                priority, project, specificAttribute1, lineNumber, severity.Value);
            }
            else
            {
                newTask = new NewFeature(title, description, startDate, endDate, estimatedTime,
                                         priority, project, specificAttribute1, specificAttribute2);
            }
            //Console.WriteLine($"Current User Role: {_currentUser.Role}");
            //Console.WriteLine($"Project Manager Email: {project.ProjectManager.Email}");
            //Console.WriteLine($"Logged-in User Email: {_currentUser.Email}");
            project.Tasks.Add(newTask);
            return newTask;
        }
        public void AssignTask(Task task, User assignee)
        {
            if (_currentUser?.Role != UserRole.ProjectManager && _currentUser?.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only Project Managers or Site Admins can assign tasks.");
            }
            if (task.Project.ProjectManager.Email != _currentUser.Email && _currentUser.Role != UserRole.SiteAdmin)
            {
                throw new UnauthorizedAccessException("Only Project Managers or Site Admins can assign tasks.");
            }
            if (!task.Project.TeamMembers.Contains(assignee))
            {
                throw new ArgumentException("Assignee must be a team member of the project.");
            }
            task.AssignedTo = assignee;
        }
        public IEnumerable<Task> GetTasksForCurrentUser()
        {
            if (_currentUser == null)
            {
                throw new UnauthorizedAccessException("User not logged in.");
            }
            if (_currentUser.Role == UserRole.ProjectManager)
            {
                return GetProjectsForCurrentUser().SelectMany(p => p.Tasks);
            }
            if (_currentUser.Role == UserRole.Developer || _currentUser.Role == UserRole.QA)
            {
                return _projects
                    .Where(p => p.TeamMembers.Contains(_currentUser))
                    .SelectMany(p => p.Tasks)
                    .Where(t => t.AssignedTo?.Email == _currentUser.Email);
            }
            return Enumerable.Empty<Task>();
        }
        public void UpdateTaskStatus(Task task, TaskStatus newStatus)
        {
            if (_currentUser == null)
            {
                throw new UnauthorizedAccessException("User not logged in.");
            }
            if (task.AssignedTo?.Email != _currentUser.Email &&
                task.Project.ProjectManager.Email != _currentUser.Email)
            {
                throw new UnauthorizedAccessException("You can only update tasks assigned to you or in your projects.");
            }
            task.UpdateStatus(newStatus, _currentUser);
        }
        public void AddCommentToTask(Task task, string commentText)
        {
            if (_currentUser == null)
            {
                throw new UnauthorizedAccessException("User not logged in.");
            }
            if (task.AssignedTo?.Email != _currentUser.Email &&
                task.Project.ProjectManager.Email != _currentUser.Email)
            {
                throw new UnauthorizedAccessException("You can only comment on tasks assigned to you or in your projects.");
            }
            task.AddComment(_currentUser, commentText);
        }
        public void AssignTaskToQA(Task task, User qaUser)
        {
            if (_currentUser?.Role != UserRole.Developer)
            {
                throw new UnauthorizedAccessException("Only Developers can assign tasks to QA.");
            }
            if (task.AssignedTo?.Email != _currentUser.Email)
            {
                throw new UnauthorizedAccessException("You can only assign tasks that are assigned to you.");
            }
            if (qaUser.Role != UserRole.QA)
            {
                throw new ArgumentException("Assignee must be a QA.");
            }
            if (!task.Project.TeamMembers.Contains(qaUser))
            {
                throw new ArgumentException("QA must be a team member of the project.");
            }
            task.AssignedTo = qaUser;
        }
    }
}
