using PropperPrep.Models;
using PropperPrep.Repositories;
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
        public ActionResult GetAllScheduledMeals()
        {
            var meals = _scheduledMealRepo.GetAllScheduledMeals();
            return Ok(meals);
        }

        // GET: ScheduledMealController/Details/5
        // MIGHT HAVE TO CHANGE ACTIONRESULT
        [HttpGet("{id}")]
        public ScheduledMeal GetScheduledMealById(int id)
        {
            return _scheduledMealRepo.GetScheduledMealById(id);
        }

        // GET: ScheduledMealController/Create
        [HttpPost]
        public ActionResult CreateScheduledMeal(ScheduledMeal scheduledMeal)
        {
            var newMeal = _scheduledMealRepo.CreateScheduledMeal(scheduledMeal);
            return Ok(newMeal);
        }


        // GET: ScheduledMealController/Edit/5
        [HttpPut]
        public void UpdateScheduledMeal(ScheduledMeal scheduledMeal)
        {
            _scheduledMealRepo.UpdateScheduledMeal(scheduledMeal);
        }

        // GET: ScheduledMealController/Delete/5
        [HttpDelete]
        public void DeleteScheduledMeal(int id)
        {
            _scheduledMealRepo.DeleteScheduledMeal(id);
        }
    }
}
