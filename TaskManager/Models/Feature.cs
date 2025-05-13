
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaskManagement.Enums;

namespace TaskManagement.Models
{
    internal class Features : Tasks
    {
        public string ModuleName;
        public string ChangeRequestNumber;

        public Features(string moduleName, string changeRequestNumber,
                          string title, string description, DateTime startDate, DateTime endDate,
                          int estimatedTime, Priority priorityLevel, TaskStatus status,
                          User assignedTo, int maxComments)
            : base(title, description, startDate, endDate, estimatedTime,
                   priorityLevel, status, assignedTo, maxComments)
        {
            ModuleName = moduleName;
            ChangeRequestNumber = changeRequestNumber;
        }

        public override void Display()
        {
            Console.WriteLine($"Feature: {Title} | Module: {ModuleName}, CR#: {ChangeRequestNumber}");
            Console.WriteLine($"Assigned To: {AssignedTo?.UserName ?? "Unassigned"}");
            Console.WriteLine($"Priority: {PriorityLevel}, Status: {Status}");
        }
    }
}
