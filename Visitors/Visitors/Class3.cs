using System;

class Program
{
    static void Main()
    {
        FrontDesk frontDesk = new FrontDesk();

        while (true)
        {
            Console.WriteLine("\nVisitor Management System");
            Console.WriteLine("1. Add Host");
            Console.WriteLine("2. Add Visitor");
            Console.WriteLine("3. View All Hosts");
            Console.WriteLine("4. View All Visitors");
            Console.WriteLine("5. List Visitors By Date");
            Console.WriteLine("6. List Visitors By HostId");
            Console.WriteLine("7. Remove Visitor");
            Console.WriteLine("8. Exit");
            Console.Write("Select an option: ");

            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    frontDesk.AddHost();
                    break;
                case 2:
                    frontDesk.AddVisitor();
                    break;
                case 3:
                    frontDesk.ViewAllHosts();
                    break;
                case 4:
                    frontDesk.ViewAllVisitors();
                    break;
                case 5:
                    frontDesk.ListVisitorsByDate();
                    break;
                case 6:
                    frontDesk.ListVisitorsByHostId();
                    break;
                case 7:
                    frontDesk.RemoveVisitor();
                    break;
                case 8:
                    Console.WriteLine("Exiting...");
                    return;
                default:
                    Console.WriteLine("Invalid option, please try again.");
                    break;
            }
        }
    }
}
