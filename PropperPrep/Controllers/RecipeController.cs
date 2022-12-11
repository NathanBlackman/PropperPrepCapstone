using PropperPrep.Repositories;
using PropperPrep.Models;
using Microsoft.AspNetCore.Mvc;

namespace PropperPrep.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : Controller
    {
        private readonly IRecipes _recipeRepo;

        public RecipeController(IRecipes recipeRepository)
        {
            _recipeRepo = recipeRepository;
        }

        // GET: RecipeController
        [HttpGet]
        public List<Recipe> GetAllRecipes()
        {
            return _recipeRepo.GetAllRecipes();
        }

        // GET: RecipeController/Details/5
        [HttpGet("{id}")]
        public Recipe GetRecipeById(int id)
        {
            return _recipeRepo.GetRecipeById(id);
        }

        // GET: RecipeController/Create
        [HttpPost]
        public Recipe CreateRecipe(Recipe recipe)
        {
            var newRecipe = _recipeRepo.CreateRecipe(recipe);
            return newRecipe;
        }

        // GET: RecipeController/Edit/5
        [HttpPut]
        public void UpdateRecipe(Recipe recipe)
        {
           _recipeRepo.UpdateRecipe(recipe);
        }

        // GET: RecipeController/Delete/5
        [HttpDelete]
        public void DeleteRecipe(int id)
        {
            _recipeRepo.DeleteRecipe(id);
        }
    }
}