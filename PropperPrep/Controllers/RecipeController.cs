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
        public IActionResult CreateRecipe(Recipe recipe)
        {
            var newRecipe = _recipeRepo.CreateRecipe(recipe);
            return Ok(newRecipe);
        }

        // GET: RecipeController/Edit/5
        [HttpPut("updateRecipe/{id}")]
        public IActionResult UpdateRecipe(Recipe recipe)
        {
           _recipeRepo.UpdateRecipe(recipe);
            return NoContent();
           
        }

        // GET: RecipeController/Delete/5
        [HttpDelete("deleteRecipe/{id}")]
        public void DeleteRecipe(int id)
        {
            _recipeRepo.DeleteRecipe(id);
        }
    }
}