export const getAllRecipes = () => {
    return fetch('https://localhost:7169/api/Recipe')
        .then(res => res.json())
}

export const getRecipeById = () => {
    return fetch('https://localhost:7169/api/Recipe')
        .then()
}

