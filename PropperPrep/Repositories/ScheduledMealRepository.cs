using PropperPrep.Models;
using Microsoft.Data.SqlClient;

namespace PropperPrep.Repositories
{
    public class ScheduledMealRepository : BaseRepository, IScheduledMeal
    {
        public readonly string _baseSqlSelect = @"SELECT Id,
                                                  recipeId,
                                                  cookDate
                                                  FROM [ScheduledMeal]";

        public ScheduledMealRepository(IConfiguration config) : base(config) { }

        public List<ScheduledMeal> GetAllScheduledMeals()
        {
            using(var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseSqlSelect;

                    using (var reader = cmd.ExecuteReader())
                    {
                        var results = new List<ScheduledMeal>();
                        while (reader.Read())
                        {
                            var meal = LoadFromData(reader);

                            results.Add(meal);
                        }

                        return results;
                    }
                }
            }
        }

        public ScheduledMeal GetScheduledMealById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = $"{_baseSqlSelect} WHERE Id" + $" = @id";

                    cmd.Parameters.AddWithValue("@id", id);
                    
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        ScheduledMeal? result = null;
                        if (reader.Read())
                        {
                            return LoadFromData(reader);
                        }

                        return result;

                    }
                }
            }
        }


        public ScheduledMeal CreateScheduledMeal(ScheduledMeal scheduledMeal)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [ScheduledMeal]         (RecipeId,
                                                         CookDate)
                    OUTPUT INSERTED.ID
                    VALUES                              (@recipeId,
                                                         @cookDate);
                    ";

                    cmd.Parameters.AddWithValue("@recipeId", scheduledMeal.RecipeId);
                    cmd.Parameters.AddWithValue("@cookDate", scheduledMeal.CookDate);

                    int id = (int)cmd.ExecuteScalar();
                    scheduledMeal.Id = id;
                    return scheduledMeal;

                };
            }
        }

        // Update ScheduledMeal
        public void UpdateScheduledMeal(ScheduledMeal scheduledMeal)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                UPDATE [ScheduledMeal]
                                SET
                                RecipeId = @recipeId,
                                CookDate = @cookDate
                             WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@recipeId", scheduledMeal.RecipeId);
                    cmd.Parameters.AddWithValue("@cookDate", scheduledMeal.CookDate);
                    cmd.Parameters.AddWithValue("@id", scheduledMeal.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        
        // Delete ScheduledMeal
        public void DeleteScheduledMeal(int id)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM [ScheduledMeal]
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


        private ScheduledMeal LoadFromData(SqlDataReader reader)
        {
            return new ScheduledMeal
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                RecipeId = reader.GetInt32(reader.GetOrdinal("RecipeId")),
                CookDate = reader.GetDateTime(reader.GetOrdinal("CookDate"))
            };
        }
    }
}
