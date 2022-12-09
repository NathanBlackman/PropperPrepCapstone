/*using PropperPrep.Models;
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
                            var order = LoadFromData(reader);

                            results.Add(order);
                        }

                        return results;
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
                    INSERT INTO [ScheduledMeal]         (id,
                                                         recipeId,
                                                         cookDate)
                    OUTPUT INSERTED.ID
                    VALUES                              (@id,
                                                         @recipeId,
                                                         @cookDate);
                    ";

                    cmd.Parameters.AddWithValue
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
                                UPDATE [Order]
                                SET
                                RecipeId = @recipeId,
                                CookDate = @cookDate
                             WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@recipeId", scheduledMeal.RecipeId);
                    cmd.Parameters.AddWithValue("@cookDate", scheduledMeal.CookDate);
                    cmd.Parameters.AddWithValue("@id", scheduledMeal.Id);

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
                //Figure out what GetDateOnly would actually be
                //CookDate = reader.GetDateOnly(reader.GetOrdinal("CookDate"))
            };
        }
    }
}
*/