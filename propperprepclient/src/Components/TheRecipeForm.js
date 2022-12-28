import React, { useEffect, useState } from 'react';
import { 
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label,


} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { createRecipe, getRecipeById, updateRecipe } from '../ApiManager';



export default function TheRecipeForm({ user }) {
  
  const { id } = useParams();
 
  const initialState = {
    mealName: '',
    description: '',
    ingredients: '',
    directions: '',
    imageURL: '',
    userId: '',
  };
  debugger
  const [formInput, setFormInput] = useState(initialState);
  
  const navigate = useNavigate();

  


  const handleChange = (e) => {
    const { name, value } = e.target;
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
      updateRecipe(id, formInput).then(() => {
        resetForm();
        navigate('/recipes');
        console.log("did this work at all??");
      })
    } else {
      
      debugger
      createRecipe({ ...formInput })
        .then(() => {
          resetForm();
          navigate("/recipes");
        });
    }
  }



  useEffect(() => {
    if (id) {
      getRecipeById(id).then((recipe) => {
          setFormInput({
            id: id,
            mealName: recipe.mealName,
            ingredients: recipe.ingredients,
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

    <div>
      <Card className="card-form">
        <Form
          className='recipe-form'
          onSubmit={handleSubmit}
        >
          <FormGroup
            className='recipe-name'
          >
            <Label for='mealName'>
              Meal Name
            </Label>
            <Input
              id='mealName'
              name="mealName"
              value={formInput.mealName || ''}
              onChange={handleChange}
              placeholder="Enter Meal Name"
              type='text'
              required
            />
          </FormGroup>
          <FormGroup
            className='description'
          >
            <Label for='description'>
              Description
            </Label>
            <Input
              id='description'
              name="description"
              value={formInput.description || ''}
              onChange={handleChange}
              placeholder="Enter Meal Description"
              type='textarea'
              required
            />
          </FormGroup>
          <FormGroup
            className='recipe-name'
          >
            <Label for='ingredients'>
              Ingredients
            </Label>
            <Input
              id='ingredients'
              name="ingredients"
              value={formInput.ingredients || ''}
              onChange={handleChange}
              placeholder="Enter ingredients"
              type='textarea'
              required
            />
          </FormGroup>
          <FormGroup
            className='recipe-name'
          >
            <Label for='directions'>
              Directions
            </Label>
            <Input
              id='directions'
              name="directions"
              value={formInput.directions || ''}
              onChange={handleChange}
              placeholder="Enter Directions"
              type='textarea'
              required
            />
          </FormGroup>
          <FormGroup
            className='recipe-name'
          >
            <Label for='imageURL'>
              Image URL
            </Label>
            <Input
              id='imageURL'
              name="imageURL"
              value={formInput.imageURL || ''}
              onChange={handleChange}
              placeholder="imageurl.com"
              type='url'
              required
            />
          </FormGroup>
          <Button
            type='submit'
            color="primary"
          >{id ? 'Update' : 'Submit'}
          </Button>
        </Form>
      </Card>
    </div>

    /*
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
    */
  );
}

