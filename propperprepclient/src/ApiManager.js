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
    debugger

    return fetch(`https://localhost:7169/api/Recipe/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}

/*
export const updateRecipe = (recipe) => {
    return fetch(`https://localhost:7169/api/Recipe/${recipe.id}`)
        .then(res => res.json())
}
*/
/*
export const createRecipe = () => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'POST Request' })
    };
    fetch('https://localhost:7169/api/Recipe', requestOptions)
        .then(res => res.json())
        .then(data => this.setState({ postId: data.id }));

    
    
    return fetch('https://localhost:7169/api/Recipe')
        .then(res => res.json())
    
}
*/
export const deleteRecipe = (id) => {
    return fetch(`https://localhost:7169/api/Recipe/${id}`, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete Complete' }));
}

//export const CreateScheduledMeal

//export const DeleteScheduledMeal


export function createRecipe() {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'POST Request' })
    };
    fetch('https://localhost:7169/api/Recipe', requestOptions)
        .then(res => res.json())
        .then(data => this.setState({ postId: data.id }));
}