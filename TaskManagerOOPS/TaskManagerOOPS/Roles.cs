using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerOOPS
{
    internal class Roles
    {
        public int RoleId {  get; set; }
        public string RoleName { get; set; }

        public override string ToString()
        {
            return $"Role Id: {RoleId}  -  Role Name: {RoleName}";
        }
    }
}
