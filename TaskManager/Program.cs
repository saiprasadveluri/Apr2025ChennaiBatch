using System;
using TaskManager.Services;
using TaskManager.Models;
using TaskManager;

class Program
{
    static void Main()
    {
        TaskManagerApp app = new TaskManagerApp();
        
        Console.Write("Enter username: ");
        string username = Console.ReadLine();

        Console.Write("Enter email: ");
        string email = Console.ReadLine();

        Console.Write("Enter password: ");
        string password = Console.ReadLine();

       
        int roleSelection = int.Parse(Console.ReadLine());
        UserRole role = (UserRole)(roleSelection - 1);

        app.RegisterUser(username, email, password, role);
        User loggedInUser = app.Login(email, password);

        Console.Write("Project Title: ");
        string projectTitle = Console.ReadLine();

        Console.Write("Project Description: ");
        string projectDescription = Console.ReadLine();

        app.CreateProject(projectTitle, projectDescription, loggedInUser);

        Console.WriteLine("Creation successful");
        app.DisplayProjects();
    }
}

