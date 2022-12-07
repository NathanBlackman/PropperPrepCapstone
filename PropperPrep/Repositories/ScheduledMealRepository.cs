/*namespace PropperPrep.Repositories
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
                }
            }
        }
    }
}
*/