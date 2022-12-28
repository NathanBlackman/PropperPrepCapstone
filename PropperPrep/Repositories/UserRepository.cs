using Microsoft.Data.SqlClient;
using PropperPrep.Models;
using Microsoft.AspNetCore.Mvc;

namespace PropperPrep.Repositories
{
    public class UserRepository : BaseRepository, IUser
    {
        private readonly string _baseSqlSelect = @"SELECT Id,
                                                     FirebaseId,
                                                     UserName,
                                                     ProfilePicURL
                                                   FROM [User]";

        public UserRepository(IConfiguration config) : base(config) { }

        public List<User> GetAllUsers()
        {
            using(var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseSqlSelect;

                    using (var reader = cmd.ExecuteReader())
                    {
                        var results = new List<User>();
                        while (reader.Read())
                        {
                            var user = LoadFromData(reader);
                            results.Add(user);

                        }

                        return results;
                    }
                }
            }
        }


        public User? GetUserById(string firebaseId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = $"{_baseSqlSelect} WHERE FirebaseId" +
                        $" = @firebaseId";

                    cmd.Parameters.AddWithValue("@firebaseId", firebaseId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        User? result = null;
                        if (reader.Read())
                        {
                            return LoadFromData(reader);
                        }

                        return result;
                    }
                }
            }
        }



        public User CreateUser(User user)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [User] (FirebaseId, UserName, ProfilePicURL)
                    OUTPUT INSERTED.ID
                    VALUES (@firebaseId, @userName, @profilePicURL)
                    ";

                    cmd.Parameters.AddWithValue("@firebaseId", user.FirebaseId);
                    cmd.Parameters.AddWithValue("@userName", user.UserName);
                    cmd.Parameters.AddWithValue("@profilePicURL", user.ProfilePicURL);

                    int id = (int)cmd.ExecuteScalar();
                    user.Id = id;
                    return user;
                }
            }
        }


        public void UpdateUser(User user)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE [User]
                            SET
                                UserName = @userName,
                                ProfilePicURL = @profilePicURL
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@userName", user.UserName);
                    cmd.Parameters.AddWithValue("@profilePicURL", user.ProfilePicURL);
                    cmd.Parameters.AddWithValue("@id", user.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteUser(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM [User]
                            WHERE Id = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        private User LoadFromData(SqlDataReader reader)
        {
            return new User
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                FirebaseId = reader.GetString(reader.GetOrdinal("FirebaseId")),
                UserName = reader.GetString(reader.GetOrdinal("UserName")),
                ProfilePicURL = reader.GetString(reader.GetOrdinal("ProfilePicURL"))
            };
        }

    }
}
