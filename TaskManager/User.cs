namespace TaskManager.Models
{
    public enum UserRole
    {
        SiteAdmin,
        ProjectManager,
        Developer,
        QA
    }
    public class User
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserRole Role { get; set; }
        public User(string userName, string email, string password, UserRole role)
        {
            UserName = userName;
            Email = email;
            Password = password;
            Role = role;
        }
    }
}