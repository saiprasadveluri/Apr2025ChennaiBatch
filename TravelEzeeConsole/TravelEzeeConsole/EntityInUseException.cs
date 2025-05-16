
namespace TravelEzeeConsole.TravelEzeeConsole
{
    [Serializable]
    internal class EntityInUseException : Exception
    {
        public EntityInUseException()
        {
        }

        public EntityInUseException(string? message) : base(message)
        {
        }

        public EntityInUseException(string? message, Exception? innerException) : base(message, innerException)
        {
        }
    }
}