using PropperPrep.Models;
using PropperPrep.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PropperPrep.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ScheduledMealController : Controller
    {

        private readonly IScheduledMeal _scheduledMealRepo;

        public ScheduledMealController(IScheduledMeal scheduledMealRepository)
        {
            _scheduledMealRepo = scheduledMealRepository;
        }

        // GET: ScheduledMealController
        [HttpGet]
        public List<ScheduledMeal> GetAll()
        {
            return _scheduledMealRepo.GetAllScheduledMeals();
        }

        // GET: ScheduledMealController/Details/5
        [HttpGet("{id}")]
        public ScheduledMeal GetScheduledMealById(int id)
        {
            return _scheduledMealRepo.GetScheduledMealById(id);
        }

        // GET: ScheduledMealController/Create
        /* STILL TRYING TO DECIDE IF NEEDED
        public ActionResult Create()
        {
            return View();
        }

        // POST: ScheduledMealController/Create
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
        }*/

        // GET: ScheduledMealController/Edit/5
        // USE TO EDIT THE DATE

        [HttpPut("{id}")]
        public void UpdateScheduledMeal(ScheduledMeal scheduledMeal)
        {
            _scheduledMealRepo.UpdateScheduledMeal(scheduledMeal);
        }

        // POST: ScheduledMealController/Edit/5
        /*
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
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
        */
        // GET: ScheduledMealController/Delete/5
        public void DeleteScheduledMeal(int id)
        {
            _scheduledMealRepo.DeleteScheduledMeal(id);
        }

        // POST: ScheduledMealController/Delete/5
        /*[HttpPost]
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
        }*/
    }
}
