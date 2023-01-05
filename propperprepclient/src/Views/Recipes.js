import React, { useEffect, useState } from 'react';
//import { Button } from 'react-bootstrap';
import { deleteRecipe, getAllRecipes } from '../ApiManager';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap'; 
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
        //deleteRecipe(recipe.id).then(navigate('/recipes'));
        deleteRecipe(recipe.id);
        navigate('/recipes');
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
                                <div className='recipe-card' key={recipe.id}>
                            <Card
                                style={{
                                width: '18rem'
                                }}
                                onClick={() => handleViewNavigate(recipe.id)}
                            >
                                <img
                                    alt={recipe.mealName}
                                    src={recipe.imageURL}
                                />
                                    <CardBody>
                                    <CardTitle tag="h3">
                                        {recipe.mealName}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {recipe.description}
                                    </CardSubtitle>
                                    <Button onClick={handleUpdateNavigate} >
                                        Edit
                                    </Button>
                                    <Button onClick={handleDelete}>
                                        Delete
                                    </Button>
                                </CardBody>
                            </Card>
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