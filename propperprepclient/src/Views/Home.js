import React, { useState } from 'react';
import RecipeCards from '../Components/RecipeCards';

export default function Home() {
    const [recipes, setRecipes] = useState([]);
/*
    useEffect(() => {
        let isMounted = true
    })
*/
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