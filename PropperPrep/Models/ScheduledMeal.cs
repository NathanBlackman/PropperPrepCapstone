namespace PropperPrep.Models
{
    public class ScheduledMeal
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public DateTime CookDate { get; set; }
    }
}
