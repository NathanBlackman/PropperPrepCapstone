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
                                <RecipeCards 
                                    //add key when user is implemented
                                    recipe={recipe}
                                    setRecipes={setRecipes}
                                />
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