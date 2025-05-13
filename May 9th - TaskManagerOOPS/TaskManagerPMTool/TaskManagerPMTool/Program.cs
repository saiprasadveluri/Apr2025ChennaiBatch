using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerPMTool
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Creating Users
            Users u1 = new Users("Prem", "p@p.com", "123456", "Developer");
            Users CR7 = new Users("Cristiano Ronaldo", "c@r.com", "123456", "Developer");
            Users LM10 = new Users("Lionel Messi", "l@m.com", "123456", "Developer");
            //Creating manager
            Users ProjectManager = new Users("Sarath", "s@s.com", "123456", "Project Manager");
            Console.WriteLine(u1.GetUserInfo());
            Console.WriteLine(ProjectManager.GetUserInfo());
            //Creating Project
            Projects project1 = new Projects("Task Manager", "Nothing", ProjectManager);
            //Creating Tasks
            Tasks task1 = new Bug("BUG", "GTA6", 23, "Moderate", "Wall Glitch", "Solve the Bug", DateTime.Now, DateTime.Now.AddDays(5), 100.00, "Moderate", "Not Completed", "Task Manager", u1);
            project1.ADDTeammembers(u1);//Adding members to project
            project1.AddTasks(task1, ProjectManager);//Adding Tasks

            //Comments
            Tasks Task2 = new Comments("Siuuuuuuuuuuuu!!!!!", DateTime.Now, CR7, "Wall Glitch", "Solve the Bug", DateTime.Now, DateTime.Now.AddDays(7), 20.00, "Moderate", "Not Completed", "Task Manager", CR7);
            Tasks Task3 = new Comments("Camera owo!!", DateTime.Now, LM10, "Wall Glitch", "Solve the Bug", DateTime.Now, DateTime.Now.AddDays(7), 20.00, "Moderate", "Not Completed", "Task Manager", LM10);
            Console.WriteLine(Task2.GetTaskInfo());
            Console.WriteLine(Task3.GetTaskInfo());

            Console.WriteLine(project1.GetProjectInfo());

            
            //Tasks
            Tasks[] tasks = new Tasks[2];

            tasks[0] = new Bug("BUG", "GTA6", 23, "Moderate","Wall Glitch", "Solve the Bug", DateTime.Now, DateTime.Now.AddDays(5),100.00, "Moderate", "Not Completed","Task Manager",u1 );

            tasks[1] = new NewFeatures("NEW FEATURE", "GTA6", 23, "Wall Glitch", "Solve the Bug", DateTime.Now, DateTime.Now.AddDays(7),20.00, "Moderate", "Not Completed","Task Manager",u1);

            tasks[1].AssignTasks(u1);

            tasks[1].UpdateStatus("Completed", u1);

            foreach (Tasks r in  tasks)
            {
                Console.WriteLine(r.GetTaskInfo());
            }

            
        }
    }
}
