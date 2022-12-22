/*
import React from 'react';
//import { getAllRecipes } from '../ApiManager';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function RecipeCards(recipe)  {
    
const navigate = useNavigate()

const handleChange = () => {
    navigate("/");
}

    return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.imageURL} />
            <Card.Body>
                <Card.Title>{recipe.mealName}</Card.Title>
                <Card.Text>
                    {recipe.description}
                </Card.Text>
                <Button type='button' onClick={handleChange}>Go home</Button>
            </Card.Body>
        </Card>
    </div>    
    
  );
}

RecipeCards.propTypes = {
    recipe: PropTypes.shape(PropTypes.obj).isRequired,
    setRecipe: PropTypes.func.isRequired,
}

*/