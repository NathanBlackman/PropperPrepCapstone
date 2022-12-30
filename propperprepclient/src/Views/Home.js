import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../ApiManager';
import RecipeCards from '../Components/RecipeCards';

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getAllRecipes().then((recipesArray) => {
            if (isMounted) setRecipes(recipesArray)
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div className='FirstScheduled'></div>
            <>
                <div className='card-container'>
                    {recipes.map((recipe) => (
                        <RecipeCards 
                            key={recipe.id}
                            recipe={recipe}
                            setRecipe={setRecipes}
                        />
                    ))}
                </div>
            </>     
        </div>
    )
}

/*                            key={recipe.id}
                            recipe={recipe}
                            setRecipe={setRecipes} */