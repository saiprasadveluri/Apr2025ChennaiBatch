﻿using System;
using TaskManagement.Enums;
using TaskManagement.Models;

namespace TaskManagement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Users[] users = new Users[10];
            Projects[] projects = new Projects[2];
            projects[0] = new Projects("Task Manager App", "A tool to manage tasks", users[1], 5, 10);

            int userCount = 0, projectCount = 0;

            // Add Admin User
            users[userCount++] = new Users("Admin", "admin@tm.com", "admin123", UserRole.SiteAdmin);

            // Login
            Console.Write("Email: ");
            string email = Console.ReadLine();
            Console.Write("Password: ");
            string password = Console.ReadLine();

            Users currentUser = null;
            for (int i = 0; i < userCount; i++)
            {
                if (users[i].Email == email && users[i].Password == password)
                {
                    currentUser = users[i];
                    break;
                }
            }

            if (currentUser == null)
            {
                Console.WriteLine("Invalid credentials.");
                return;
            }

            bool exit = false;
            while (!exit)
            {
                Console.WriteLine("\nChoose an option:");
                Console.WriteLine("1. Add User\n2. Create Project\n3. Assign Project Manager\n4. Assign User to Project\n5. View Projects\n0. Exit");
                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1":
                        if (userCount < users.Length)
                        {
                            Console.Write("Enter Name: ");
                            string name = Console.ReadLine();
                            Console.Write("Enter Email: ");
                            string newEmail = Console.ReadLine();
                            Console.Write("Enter Password: ");
                            string newPassword = Console.ReadLine();
                            Console.WriteLine("Select Role: 0.SiteAdmin 1.ProjectManager 2.Developer 3.QA");
                            UserRole role = (UserRole)int.Parse(Console.ReadLine());

                            users[userCount++] = new Users(name, newEmail, newPassword, role);
                            Console.WriteLine("User added successfully.");
                        }
                        else Console.WriteLine("User limit reached.");
                        break;

                    case "2":
                        if (projectCount < projects.Length)
                        {
                            Console.Write("Enter Project Title: ");
                            string title = Console.ReadLine();
                            Console.Write("Enter Description: ");
                            string desc = Console.ReadLine();
                            projects[projectCount++] = new Projects(title, desc, users[1], 5, 10);
                            Console.WriteLine("Project created successfully.");
                        }
                        else Console.WriteLine("Project limit reached.");
                        break;

                    case "3":
                        Console.Write("Enter Project Title: ");
                        string pTitle = Console.ReadLine();
                        Console.Write("Enter Manager Email: ");
                        string mEmail = Console.ReadLine();

                        Projects proj = null;
                        for (int i = 0; i < projectCount; i++)
                        {
                            if (projects[i] != null && projects[i].Title == pTitle)
                            {
                                proj = projects[i];
                                break;
                            }
                        }

                        Users manager = null;
                        for (int i = 0; i < userCount; i++)
                        {
                            if (users[i] != null && users[i].Email == mEmail && users[i].Role == UserRole.ProjectManager)
                            {
                                manager = users[i];
                                break;
                            }
                        }

                        if (proj != null && manager != null)
                        {
                            proj.ProjectManager = manager;
                            Console.WriteLine("Project manager assigned successfully.");
                        }
                        else Console.WriteLine("Project or Manager not found.");
                        break;

                    case "4":
                        Console.Write("Enter Project Title: ");
                        string pt = Console.ReadLine();
                        Console.Write("Enter User Email: ");
                        string ue = Console.ReadLine();

                        Projects prj = null;
                        for (int i = 0; i < projectCount; i++)
                        {
                            if (projects[i] != null && projects[i].Title == pt)
                            {
                                prj = projects[i];
                                break;
                            }
                        }

                        Users usr = null;
                        for (int i = 0; i < userCount; i++)
                        {
                            if (users[i] != null && users[i].Email == ue && (users[i].Role == UserRole.Developer || users[i].Role == UserRole.QA))
                            {
                                usr = users[i];
                                break;
                            }
                        }

                        if (prj != null && usr != null)
                        {
                            prj.AssignMember(usr);
                            Console.WriteLine("User assigned to project.");
                        }
                        else Console.WriteLine("Invalid project or user.");
                        break;

                    case "5":
                        Console.WriteLine("Projects:");
                        for (int i = 0; i < projectCount; i++)
                        {
                            if (projects[i] != null)
                                Console.WriteLine($"{projects[i].Title} - {projects[i].Description} - Manager: {projects[i].ProjectManager?.UserName}");
                        }
                        break;

                    case "0":
                        exit = true;
                        break;
                }
            }
        }
    }
}