using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class TaskManager
    {
        private static Session _Session;
        static TaskManager()
        {
            _Session=Session.GetInstance();
        }
        public static void StartApp()
        {
            
            while (true)
            {
                int Option=DisplayMenu();
                if (Option == 0)
                {
                    break;
                }
                switch (Option)
                {
                    case 5:
                        DisplayRoles();
                        break;
                    case 6:
                        AddNewRole();
                        break;
                }
            }
        }

        private static void DisplayRoles()
        {
            foreach (var rl in _Session.Roles)
            {
                Console.WriteLine(rl.ToString());
            }
        }
        
        private static void AddNewRole()
        {
            Console.WriteLine("Role Name: ");
            string rolename=Console.ReadLine();
            Roles role=_Session.Roles.Find(rl=>rl.RoleName==rolename);
            if (role == null)
            {
                Roles newrole = new Roles()
                {
                    RoleName = rolename,
                    RoleId = _Session.Increment_ROLE_SEQ_NUMBER()
                };
                _Session.Roles.Add(newrole);
            }

        }
        private static int DisplayMenu()
        {
            Console.WriteLine($"0: Exit, 1: List Roles 2:List Users 3: List Projects 4: List Tasks 5: List Comments 6: Add Role");
            Console.WriteLine("Enter Option: ");
            int Option=int.Parse( Console.ReadLine() );
            return Option;
        }
    }
}
