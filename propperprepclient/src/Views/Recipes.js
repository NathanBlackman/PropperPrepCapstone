import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../ApiManager';
import RecipeCards from '../Components/RecipeCards';

export default function Recipes() {
    
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        getAllRecipes().then((recipe) => {
            setRecipes(recipe);
        });
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <div className='recipe-container'>
                {recipes ? (
                    <>
                        <div className='recipecard-container'>
                            {recipes.map((recipe) => (
                                <div key={recipe.id}>
                                    <img className='recipeImage' alt={recipe.mealName} src={recipe.imageURL} />
                                    <h1>{recipe.mealName}</h1>
                                    <p>{recipe.description}</p>

                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <h1>No Current Recipes</h1>
                )}
            </div>
        </div>
    )
}