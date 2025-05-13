using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager
{
	public Userlist()
	{


    private static User[] users = new User[10];
    private static int userCount = 0;

    public void CreateUser(public void CreateUser(string username, string email, string password, string role))
    {
        if (GetUserByEmail(email) != null)
        {
            Console.WriteLine($"User with email {email} already exists.");
            return;
        }

        if (userCount >= _users.Length)
        {
            Array.Resize(ref users, users.Length * 2);
        }

        users[userCount++] = new User(username, email, password, role);
        Console.WriteLine($"User {username} ({role}) created.");
    }

    public User AuthenticateUser(string email, string password)
    {
        for (int i = 0; i < userCount; i++)
        {
            if (users[i].Email == email && users[i].Password == password)
            {
                Console.WriteLine($"Welcome {users[i].Username}! Role: {users[i].Role}");
                return _users[i];
            }
        }

        Console.WriteLine("Invalid email or password.");
        return null;
    }

    public User GetUserByEmail(string email)
    {
        for (int i = 0; i < userCount; i++)
        {
            if (_users[i].Email == email)
                return users[i];
        }
        return null;
    }

    public User[] GetAllUsers()
    {
        User[] result = new User[userCount];
        Array.Copy(users, result, userCount);
        return result;
    }
}
