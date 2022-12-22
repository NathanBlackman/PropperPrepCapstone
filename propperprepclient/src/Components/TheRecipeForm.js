import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { createRecipe, getRecipeById, updateRecipe } from '../ApiManager';

const initialState = {
    mealName: '',
    description: '',
    ingredients: '',
    directions: '',
    imageURL: '',
    userId: '',
  };

export default function TheRecipeForm({ user }) {
  
  const [formInput, setFormInput] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setFormInput((preState) => ({
      ...preState,
      [name]: value,
    }));
    console.log(formInput)
  };

  const resetForm = () => {
    setFormInput({...initialState})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      debugger
      updateRecipe(id, formInput).then(() => {
        resetForm();
        navigate('/recipes');
        console.log("did this work at all??");
      })
    } else {
      createRecipe({ ...formInput, userId: user.id})
        .then(() => {
          resetForm();
          navigate("/recipes");
        });
    }
  }



  useEffect(() => {
    debugger
    if (id) {
      getRecipeById(id).then((recipe) => {
          setFormInput({
            mealName: recipe.mealName,
            description: recipe.description,
            directions: recipe.directions,
            imageURL: recipe.imageURL,
          });
      })
    } else {
      setFormInput(initialState);
    }
  }, [id]);
  
  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Meal Name</Form.Label>
        <Form.Control type="text" onChange={handleChange} placeholder="Enter Meal Name" />
        <Form.Text className="text-muted">
          {formInput.mealName || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="textarea" onChange={handleChange} placeholder="Enter Meal Description" />
        <Form.Text className="text-muted">
          {formInput.description || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Ingredients</Form.Label>
        <Form.Control type="textarea" onChange={handleChange} placeholder="Enter Ingredients" />
        <Form.Text className="text-muted">
          {formInput.ingredients || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Directions</Form.Label>
        <Form.Control type="textarea" onChange={handleChange} placeholder="Enter Directions" />
        <Form.Text className="text-muted">
          {formInput.directions || ''}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="url" placeholder="imagejpg.com..." />
        <Form.Text className="text" onChange={handleChange}>
          {formInput.imageURL}
        </Form.Text>
      </Form.Group>
      <Button type='submit'>{id ? 'Update' : 'Submit'}</Button>
    </Form>
    // add a dropdown calendar and add datetime to it
    
  );
}

