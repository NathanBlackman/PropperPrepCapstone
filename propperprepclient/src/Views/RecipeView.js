import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { deleteRecipe, getRecipeById } from "../ApiManager";

export default function RecipeView() {
    const [recipe, setRecipe] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const handleUpdateNavigate = () => {
        navigate(`/recipe-form/${id}`);
    }
    const handleCancel = () => {
        navigate("/recipes");
    }

    const handleDelete = (id) => {
        deleteRecipe(id).then(() => {
            navigate('/recipes');
        });
    }

    useEffect(() => {
        console.log(id);
        getRecipeById(id).then((recipe) => setRecipe(recipe));
    }, [id]);
    
    return(
        <div className="recipe-view-style">
            <img className="recipe-view-img" alt={recipe.mealName} src={recipe.imageURL} />
            <div className="view-info">
                <h1 className="mealname-view">{recipe.mealName}</h1>
                <h3>{recipe.description}</h3>
                <h4>{recipe.ingredients}</h4>
                <p>{recipe.directions}</p>
                <div className="view-button-group">
                    <Button type='button' onClick={handleUpdateNavigate}>Edit</Button>
                    <Button type='button' onClick={() => handleDelete(id)}>Delete</Button>
                    <Button type='button' onClick={handleCancel}>Cancel</Button>  
                </div>
            </div>
        </div>
    )
}