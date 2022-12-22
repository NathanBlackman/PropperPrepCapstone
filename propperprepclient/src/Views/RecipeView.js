import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRecipe, getRecipeById } from "../ApiManager";

export default function RecipeView() {
    const [recipe, setRecipe] = useState({});

    const { id } = useParams()

    const navigate = useNavigate();

    const handleUpdateNavigate = () => {
        navigate(`/recipe-form/${id}`);
    }
    const handleCancel = () => {
        navigate("/recipes");
    }

    const handleDelete = (id) => {
        deleteRecipe(id).then(() => navigate('/recipes'));
    }

    useEffect(() => {
        console.log(id);
        getRecipeById(id).then((recipe) => setRecipe(recipe));
    }, [id]);
    
    return(
        <div>
            <h1>Recipe View</h1>
            <h1>{recipe.mealName}</h1>
            <img alt={recipe.mealName} src={recipe.imageURL} />
            <h3>{recipe.description}</h3>
            <h4>{recipe.ingredients}</h4>
            <p>{recipe.directions}</p>
            <button type='button' onClick={handleUpdateNavigate}>Edit</button>
            <button type='button' onClick={handleDelete}>Delete</button>
            <button type='button' onClick={handleCancel}>Cancel</button>
        </div>
    )
}