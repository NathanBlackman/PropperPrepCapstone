export const getAllScheduledMeals = () => {
    return fetch('https://localhost:7169/api/ScheduledMeal')
        .then(res => res.json())
}

export const getScheduledMealById = (id) => {
    return fetch(`https://localhost:7169/api/ScheduledMeal/${id}`)
        .then(res => res.json())
}
