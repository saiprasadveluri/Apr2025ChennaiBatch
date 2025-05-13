using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
    internal class Project
    {
        private User[] teamMembers = new User[5];
        private int teamMemberCount = 0;

        private Task[] tasks = new Task[10];
        private int taskCount = 0;

        public string Title { get; set; }
        public string Description { get; set; }
        public User ProjectManager { get; set; }

        public Project(string title, string description, User projectManager)
        {
            Title = title;
            Description = description;
            ProjectManager = projectManager;
        }

        public void AddTeamMember(User user)
        {
            if (!ContainsUser(user))
            {
                if (teamMemberCount >= teamMembers.Length)
                {
                    Array.Resize(ref teamMembers, teamMembers.Length * 2);
                }
                teamMembers[teamMemberCount++] = user;
            }
        }

        public void RemoveTeamMember(User user)
        {
            for (int i = 0; i < teamMemberCount; i++)
            {
                if (teamMembers[i] == user)
                {
                   
                    for (int j = i; j < teamMemberCount - 1; j++)
                    {
                        teamMembers[j] = teamMembers[j + 1];
                    }
                    teamMembers[--teamMemberCount] = null;
                    break;
                }
            }
        }

        private bool ContainsUser(User user)
        {
            for (int i = 0; i < teamMemberCount; i++)
            {
                if (teamMembers[i] == user)
                    return true;
            }
            return false;
        }

        public void AddTask(Task task)
        {
            if (taskCount >= tasks.Length)
            {
                Array.Resize(ref tasks, tasks.Length * 2);
            }
            tasks[taskCount++] = task;
        }

        public Task GetTaskByTitle(string title)
        {
            for (int i = 0; i < taskCount; i++)
            {
                if (tasks[i].Title == title)
                    return tasks[i];
            }
            return null;
        }

        public User[] GetTeamMembers()
        {
            User[] result = new User[teamMemberCount];
            Array.Copy(teamMembers, result, teamMemberCount);
            return result;
        }

        public Task[] GetTasks()
        {
            Task[] result = new Task[taskCount];
            Array.Copy(tasks, result, taskCount);
            return result;
        }
    }
}
