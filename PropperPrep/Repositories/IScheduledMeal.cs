﻿using PropperPrep.Models;

namespace PropperPrep.Repositories
{
    public interface IScheduledMeal
    {
        public List<ScheduledMeal> GetAllScheduledMeals();
        public ScheduledMeal GetScheduledMealById(int id);
        public void UpdateScheduledMeal(ScheduledMeal scheduledMeal);
        public void DeleteScheduledMeal(int id);
    }
}
