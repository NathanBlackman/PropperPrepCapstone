using PropperPrep.Models;

namespace PropperPrep.Repositories
{
    public interface IRecipes
    {
        public List<Recipe> GetAllRecipes();
        public Recipe GetRecipeById(int id);
        public Recipe CreateRecipe(Recipe recipe);
        public void UpdateRecipe(Recipe recipe);
        public void DeleteRecipe(int id);
    }
}

// 
