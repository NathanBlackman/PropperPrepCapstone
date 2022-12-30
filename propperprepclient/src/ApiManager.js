

export const getAllRecipes = () => {
    return fetch('https://localhost:7169/api/Recipe')
        .then(res => res.json())
}

export const getRecipeById = (id) => {
    return fetch(`https://localhost:7169/api/Recipe/${id}`)
        .then(res => res.json())
}


export const updateRecipe = (id, recipe) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
    };

    return fetch(`https://localhost:7169/api/Recipe/updateRecipe/${id}`, requestOptions)
}

export const createRecipe = (recipe) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe)
    };
    debugger
    return fetch('https://localhost:7169/api/Recipe', requestOptions)
        .then(res => res.json())
}


export const deleteRecipe = (id) => {
    return fetch(`https://localhost:7169/api/Recipe/deleteRecipe/${id}`, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete Complete' }));
}

export const fetchUser = (firebaseId) => {
    return fetch(`https://localhost:7169/api/User/${firebaseId}`)
}