import React, { useEffect, useState } from 'react';
import { 
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { createRecipe, getRecipeById, updateRecipe } from '../ApiManager';



export default function TheRecipeForm({ firebaseId }) {
  //debugger
  const { id } = useParams();

  const initialState = {
    mealName: '',
    description: '',
    ingredients: '',
    directions: '',
    imageURL: '',
    schedule: '',
    userId: firebaseId,
  };

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
      debugger
      //id
      updateRecipe(id, { ...formInput })
        .then(() => {
          resetForm();
          navigate('/recipes');
          console.log("did this work at all??");
      })
    } else { 
      //debugger
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
            id: parseInt(id),
            userId: firebaseId,
            mealName: recipe.mealName,
            ingredients: recipe.ingredients,
            description: recipe.description,
            directions: recipe.directions,
            schedule: recipe.schedule,
            imageURL: recipe.imageURL,
          });
      })
    } 
  }, [id, firebaseId]);
  //debugger
  
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
            className='recipe-schedule'
          >
            <Label for='schedule'>
              Schedule
            </Label>
            <Input
              id='schedule'
              name="schedule"
              value={formInput.schedule || ''}
              onChange={handleChange}
              placeholder="Add date and Time to Schedule"
              type='datetime-local'
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
  );
}
