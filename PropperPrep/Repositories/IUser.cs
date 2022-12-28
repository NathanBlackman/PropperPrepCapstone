using PropperPrep.Models;

namespace PropperPrep.Repositories
{
    public interface IUser
    {
        public List<User> GetAllUsers();
        public User GetUserById(string firebaseId);
        public User CreateUser(User user);
        public void UpdateUser(User user);
        public void DeleteUser(int id);
    }
}
