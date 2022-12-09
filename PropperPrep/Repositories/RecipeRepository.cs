/*using Microsoft.Data.SqlClient;
using PropperPrep.Models;

namespace PropperPrep.Repositories
{
    
    public class RecipeRepository : BaseRepository, IRecipes
    {
        private readonly string _baseSqlSelect = @"SELECT Id,
                                                    UserId,
                                                    MealName,
                                                    Description,
                                                    Ingredients,
                                                    Directions,
                                                    ImageURL
                                                   FROM [Recipe]";

        public RecipeRepository(IConfiguration config) : base(config)
        {

        }

        public List<Recipe> GetAllRecipes()
        {
            using(var conn = Connection)
            {
                conn.Open();
                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseSqlSelect;

                    using (var reader = cmd.ExecuteReader())
                    {
                        var results = new List<Recipe>();
                        while (reader.Read())
                        {
                            var recipe = LoadFromData(reader);

                            results.Add(recipe);
                        }

                        return results;
                    }
                }
            }
        }

        // Get Recipe By Id
        public Recipe GetRecipeById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = $"{_baseSqlSelect} WHERE Id" + $" = @id";

                    cmd.Parameters.AddWithValue("id", id);

                    using(SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Recipe? result = null;
                        if (reader.Read())
                        {
                            return LoadFromData(reader);
                        }

                        return result;
                    }
                }
            }
        }

        // Create Recipe
        public Recipe CreateRecipe(Recipe recipe)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    //potentially change the @ ones to uppercase
                    cmd.CommandText = @"
                        INSERT INTO [Recipe] (UserId,
                                              MealName,
                                              Description,
                                              Ingredients,
                                              Directions,
                                              ImageURL)
                        OUTPUT INSERTED.ID
                        VALUES                (@userId,
                                               @mealName,
                                               @description,
                                               @ingredients,
                                               @directions,
                                               @imageURL)";

                    cmd.Parameters.AddWithValue("@userId", recipe.UserId);
                    cmd.Parameters.AddWithValue("@mealName", recipe.MealName);
                    cmd.Parameters.AddWithValue("@description", recipe.Description);
                    cmd.Parameters.AddWithValue("@ingredients", recipe.Ingredients);
                    cmd.Parameters.AddWithValue("@directions", recipe.Directions);
                    cmd.Parameters.AddWithValue("@imageURL", recipe.ImageURL);

                    int id = (int)cmd.ExecuteScalar();
                    recipe.Id = id;
                    return recipe;
                }
            }
        }
        // Update Recipe
        public void UpdateRecipe(Recipe recipe)
        {
            using(SqlConnection conn = Connection)
            {
                conn.Open();

                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                UPDATE [Recipe]
                                SET
                                UserId = @userId,
                                MealName = @mealName,
                                Description = @description,
                                Ingredients = @ingredients,
                                Directions = @directions,
                                ImageURL = @imageURL
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@userId", recipe.UserId);
                    cmd.Parameters.AddWithValue("@mealName", recipe.MealName);
                    cmd.Parameters.AddWithValue("@description", recipe.Description);
                    cmd.Parameters.AddWithValue("@ingredients", recipe.Ingredients);
                    cmd.Parameters.AddWithValue("@directions", recipe.Directions);
                    cmd.Parameters.AddWithValue("@imageURL", recipe.ImageURL);
                    cmd.Parameters.AddWithValue("@id", recipe.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        // Delete Recipe
        public void DeleteRecipe(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM [Recipe]
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        private Recipe LoadFromData(SqlDataReader reader)
        {
            return new Recipe
            {
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                MealName = reader.GetString(reader.GetOrdinal("MealName")),
                Description = reader.GetString(reader.GetOrdinal("Description")),
                Ingredients = reader.GetString(reader.GetOrdinal("Ingredients")),
                Directions = reader.GetString(reader.GetOrdinal("Directions")),
                ImageURL = reader.GetString(reader.GetOrdinal("ImageURL")),
            };
        }
    }
}
*/