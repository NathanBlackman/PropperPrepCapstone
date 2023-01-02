namespace PropperPrep.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string MealName { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public string Directions { get; set; }
        public string ImageURL { get; set; }
        public DateTime Schedule { get; set; }
    }
}
