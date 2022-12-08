/*using PropperPrep.Repositories;
using PropperPrep.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PropperPrep.Controllers
{
    public class RecipeController : Controller
    {
        private readonly IRecipes _recipeRepo;

        // GET: RecipeController
        [HttpGet]
        public List<Recipe> GetAllRecipes()
        {
            return _recipeRepo.GetAllRecipes();
        }

        // GET: RecipeController/Details/5
        public Recipe GetRecipeById(int id)
        {
            return _recipeRepo.GetRecipeById(id);
        }

        // GET: RecipeController/Create
        public Recipe CreateRecipe(Recipe recipe)
        {
            var newRecipe = _recipeRepo.CreateRecipe(recipe);
            return newRecipe;
        }

        // POST: RecipeController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: RecipeController/Edit/5
        public void UpdateRecipe(Recipe recipe)
        {
           _recipeRepo.UpdateRecipe(recipe);
        }

        // POST: RecipeController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public void UpdateRecipe(int id, IFormCollection collection)
        {
            try
            {
                RedirectToAction(nameof(Index));
            }
            catch
            {
                View();
            }
        }

        // GET: RecipeController/Delete/5
        public void DeleteRecipe(int id)
        {
            _recipeRepo.DeleteRecipe(id);
        }

        // POST: RecipeController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}*/
