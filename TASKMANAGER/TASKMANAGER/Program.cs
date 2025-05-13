using System;
using TaskManager.Services;
using TaskManager.Models;

class Program
{
    static void Main()
    {
        TaskManagerApp app = new TaskManagerApp();

        Console.WriteLine("Welcome to Task Manager!");

        // User Registration
        Console.Write("Enter your username: ");
        string username = Console.ReadLine();

        Console.Write("Enter your email: ");
        string email = Console.ReadLine();

        Console.Write("Enter your password: ");
        string password = Console.ReadLine();

        Console.WriteLine("Select Role: 1-SiteAdmin, 2-ProjectManager, 3-Developer, 4-QA");
        int roleSelection = int.Parse(Console.ReadLine());
        UserRole role = (UserRole)(roleSelection - 1);

        app.RegisterUser(username, email, password, role);
        User loggedInUser = app.Login(email, password);

        Console.WriteLine($"Welcome {loggedInUser.Username}, you are logged in as {loggedInUser.Role}!");

 
        Console.Write("Enter Project Title: ");
        string projectTitle = Console.ReadLine();

        Console.Write("Enter Project Description: ");
        string projectDescription = Console.ReadLine();

        app.CreateProject(projectTitle, projectDescription, loggedInUser);

        Console.WriteLine("Project created successfully!");
        app.DisplayProjects();
    }
}

