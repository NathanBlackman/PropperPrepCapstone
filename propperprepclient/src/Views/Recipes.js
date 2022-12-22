import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteRecipe, getAllRecipes } from '../ApiManager';
//import RecipeCards from '../Components/RecipeCards';
import { useNavigate, useParams } from 'react-router-dom';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();


    // Won't go to URL correctly from here
    const handleUpdateNavigate = () => {
        navigate(`/recipe-form/${id}`);
    }

    const handleCreateNavigate = () => {
        navigate("/recipe-form");
    }

    const handleViewNavigate = (id) => {
        navigate(`/recipe-view/${id}`);
    }

    const handleDelete = (recipe) => {
        deleteRecipe(recipe.id).then(() => navigate('/recipes'));
    }
    
    
    useEffect(() => {
        getAllRecipes().then((recipe) => {
            setRecipes(recipe);
        });
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <Button type='button' onClick={handleCreateNavigate}>Create Recipe</Button>
            <div className='recipe-container'>
                {recipes ? (
                    <>
                        <div className='recipecard-container'>
                            {recipes.map((recipe) => (

                                <div key={recipe.id}>
                                    <img className='recipeImage' alt={recipe.mealName} src={recipe.imageURL} onClick={() => handleViewNavigate(recipe.id)} />
                                    <h1>{recipe.mealName}</h1>
                                    <p>{recipe.description}</p>
                                    <Button type='button' onClick={handleUpdateNavigate}>Edit</Button>
                                    <Button type='button' onClick={handleDelete}>Delete</Button>

                                </div>
                                // The edit button needs to go to the 
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