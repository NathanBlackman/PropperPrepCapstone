/*using PropperPrep.Models;
using Microsoft.Data.SqlClient;

namespace PropperPrep.Repositories
{
    public class ScheduledMealRepository : BaseRepository, IScheduledMeal
    {
        public readonly string _baseSqlSelect = @"SELECT Id,
                                                  recipeId,
                                                  cookDate
                                                  FROM Recipe";

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
                }
            }
        }
    }
}
*/